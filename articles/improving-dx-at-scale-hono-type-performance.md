---
title: "アプリケーションの拡大に伴う開発者体験の悪化をなんとかする"
emoji: "⚡"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: ["hono", "typescript", "drizzle", "testing", "dx"]
published: false
publication_name: "rit"
---

# はじめに

本記事は、TSKaigiでのLT「アプリケーションの拡大に伴う開発者体験の悪化をなんとかする」の詳細版です。LTでは時間の都合上お伝えできない技術的な詳細や、実装の具体例を含めて解説します。

アプリケーションが成長するにつれて、開発者体験（DX）が悪化していく問題にどう立ち向かったかを共有します。

# 背景

ある基幹システムのリプレースプロジェクトでの話です。このシステムは業務に必要な要素が多く、100を超えるテーブルとそれらを結びつける複数のリレーションを持つ、規模の大きなアプリケーションでした。各要素には業務で必要な数十のプロパティが紐づいており、データモデルだけでもかなりの複雑さがありました。

プロジェクト初期は順調でした。HonoとDrizzle ORMを採用し、型安全性を担保しながら開発を進めました。エンドポイントを追加するたびに、zodのバリデーションとDrizzleのリレーションから自動で型が推論され、クライアント側で安全にAPIを呼び出せる環境は、まさに理想的でした。

しかし、開発が進むにつれて問題が顕在化してきました：

- **エディタが重くなる**：コード補完に数秒かかるようになり、ひどい時は10秒以上待たされることも
- **TypeScriptサーバーのクラッシュ**：頻繁にサーバーが落ち、エディタの再起動が必要に
- **CI/CDの遅延**：ビルド時間が大幅に増加し、デプロイまでの時間が伸びる
- **テスト実行の遅延**：テストケースが増えるごとに実行時間が線形に増加

これらの問題は開発効率に直結します。エディタの補完を待つ時間、テストの完了を待つ時間が積み重なり、チーム全体の生産性を低下させていました。

本記事では、この状況に対して行った2つの主要な改善——**型補完の遅延対策**と**テスト実行速度の最適化**——について、具体的な検証データとともに解説します。

# 課題1: 型推論による補完の遅延

## 型安全性とそのトレードオフ

Honoは、エンドポイント定義からAPIクライアントの型を自動生成できる機能を持っています。zodによるバリデーション、Drizzleによるデータベースクエリの型推論と組み合わせることで、高い型安全性を実現できます。

```typescript
// サーバー側
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { db } from './db'
import { users, posts } from './schema'
import { eq } from 'drizzle-orm'

const app = new Hono()
  .get(
    '/users/:id',
    zValidator('param', z.object({
      id: z.string().uuid()
    })),
    async (c) => {
      const { id } = c.req.valid('param')
      const user = await db.query.users.findFirst({
        where: eq(users.id, id),
        with: {
          posts: true,
          profile: true
        }
      })
      return c.json(user)
    }
  )
  .post(
    '/users',
    zValidator('json', z.object({
      name: z.string(),
      email: z.string().email(),
      age: z.number().optional()
    })),
    async (c) => {
      const body = c.req.valid('json')
      const [user] = await db.insert(users).values(body).returning()
      return c.json(user, 201)
    }
  )

export type AppType = typeof app

// クライアント側
import { hc } from 'hono/client'
import type { AppType } from './server'

const client = hc<AppType>('http://localhost:3000')

// 型安全
// - zodのスキーマからリクエストの型が推論される
// - Drizzleのクエリからレスポンスの型が推論される
// - パスパラメータの型も推論される
const res = await client.users[':id'].$get({
  param: { id: '123e4567-e89b-12d3-a456-426614174000' }
})
const data = await res.json()
// data: {
//   id: string;
//   name: string;
//   email: string;
//   age: number | null;
//   posts: Array<{ id: string; title: string; ... }>;
//   profile: { bio: string; ... } | null;
// }
```

エンドポイントが増えると問題が発生します。

## 問題の本質

TypeScriptの型推論は、以下のような複雑な処理を行っています：

1. **すべてのルート定義を収集**
2. **zodのスキーマから型を推論**
   - optional, nullable, default値の処理
   - ネストしたオブジェクトや配列
3. **Drizzleのクエリから返り値の型を推論**
   - テーブルスキーマの型
   - リレーション（with句）の型
   - selectで選択したカラムの型
4. **パスパラメータとクエリパラメータを抽出**
5. **これらを統合してクライアント型を生成**

つまり、1つのエンドポイントだけで：

```typescript
typeof app
// ↓ 型推論が行われる
Hono<{}, {
  '/users/:id': {
    $get: {
      input: { param: { id: string } }
      output: {
        id: string
        name: string
        email: string
        posts: Array<{ ... }>
        profile: { ... } | null
      }
    }
  }
  // ... 他のエンドポイント
}>
```

このような深い型推論が、エンドポイントごとに行われます。

エンドポイントとテーブルが増えるにつれて、zodのスキーマとDrizzleのリレーションを含む型推論の複雑さが増大し、型の深さが指数関数的に増加していきます。その結果、エディタの補完に数秒（ひどい時は10秒以上）かかるようになり、TypeScriptサーバーが頻繁にクラッシュし、ビルド時間も大幅に増大するという問題が発生しました。

## 解決への試行錯誤

### 検証したアプローチ: 型定義の事前生成

動的に型を推論させるのではなく、**Honoの型情報を一度型定義ファイル（.d.ts）として書き出し、クライアント側ではそれを利用する**方法を検証しました。

#### 従来の方法（動的型推論）

```typescript
// サーバー側
export const app = new Hono()
  .get('/users/:id', /* ... */)
  .post('/users', /* ... */)

export type AppType = typeof app

// クライアント側
import type { AppType } from './server/app'
//                            ^^^^^^^^^^^^^^^^
// サーバーコードを直接importし、型推論が走る
const client = hc<AppType>('http://localhost:3000')
```

#### 検証した方法（型定義の事前生成）

```typescript
// ビルドステップで型定義を生成
// $ tsc --declaration --emitDeclarationOnly

// クライアント側
import type { AppType } from './server/dist/app'
//                            ^^^^^^^^^^^^^^^^^^
// 事前に生成された型定義ファイルを参照
const client = hc<AppType>('http://localhost:3000')
```

### パフォーマンス検証

効果を定量的に測定するため、実際のプロジェクト（100超のテーブル）を模した検証用プロジェクトを作成しました：

- **200個のDrizzleテーブル定義**（dummy1~100 + children1~100）
- **100個のエンドポイント**（/dummy1 ~ /dummy100）
- 各エンドポイントでzodValidatorとDrizzleの**ネストしたリレーション**を使用

:::details 検証用コードの例（一部抜粋）

```typescript
// スキーマ定義（一部）
export const dummy1 = pgTable('dummy1', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  // ...
});

export const children1 = pgTable('children1', {
  id: text('id').primaryKey(),
  parentId: text('parent_id').notNull(),
  title: text('title').notNull(),
  // ...
});

export const dummy1Relations = relations(dummy1, ({ many }) => ({
  children: many(children1),
}));

// エンドポイント定義（一部）
const app = new Hono()
  .get('/dummy1',
    zValidator('query', z.object({
      id: z.string().min(1),
      filter: z.string().optional(),
      limit: z.number().optional(),
    })),
    async (c) => {
      const { id } = c.req.valid('query')
      const result = await db.query.dummy1.findFirst({
        where: eq(dummy1.id, id),
        with: {
          children: true, // ネストしたリレーション
        },
      })
      return c.json(result)
    }
  )
  // ... dummy100まで続く
```
:::

#### 測定結果

| 方式 | ビルド時間 | 改善率 |
|------|-----------|--------|
| 動的型推論（`typeof app`） | 2.37秒 | - |
| 事前生成型定義（.d.ts） | 0.45秒 | **約5.3倍高速** |

※ 実測値（MacBook Pro M4, TypeScript 5.9.3, 3回計測の平均値）

#### 仕組み

**動的型推論の場合**：
```typescript
// クライアント側でこれを書くたびに重い型推論が実行される
const client = hc<AppType>('http://localhost:3000')
//              ^^^^^^^
// ここで以下の処理が走る：
// 1. 100エンドポイント × (zod + Drizzle + パスパラメータ) の型推論
// 2. すべてのルート定義の収集
// 3. 各エンドポイントのリクエスト/レスポンス型の生成
```

**事前生成の場合**：
```typescript
// ビルドステップで型定義を生成
// $ tsc --declaration --emitDeclarationOnly

// 生成された型定義ファイル（dist/app.d.ts）
export type AppType = {
  '/dummy1': {
    $get: {
      input: { query: { id: string } }
      output: { id: string; name: string; /* ... */ } | null
    }
  }
  // ... すでに推論済み
}

// クライアント側では推論済みの型を読み込むだけ
const client = hc<AppType>('http://localhost:3000')
// → 型推論は不要、型定義ファイルを参照するだけ
```

測定結果では**約5.3倍の高速化**が確認できました。

#### 採用しなかった理由

実際のプロジェクトで試したところ、以下の課題がありました：

- **型定義の再生成が必要**：エンドポイントを追加するたびに `tsc --declaration` で型定義を生成し直す手間
- **生成し忘れるリスク**：型定義の更新を忘れると、型とランタイムの不一致が発生
- **既存ワークフローへの影響**：ビルドフロー、CI/CD、開発時のホットリロードなど、既存の仕組みを大きく変更する必要

### 検証したアプローチ2: tsgo

[@typescript/native-preview](https://github.com/microsoft/TypeScript/tree/native-preview)（通称tsgo）は、TypeScriptコンパイラのGoによる再実装です。

同じ検証用プロジェクト（200テーブル、100エンドポイント）で、tsgoのパフォーマンスを測定しました。

#### 測定結果

| 方式 | ビルド時間 | 改善率 |
|------|-----------|--------|
| 動的型推論（`typeof app`） | 2.37秒 | - |
| tsgo | 0.92秒 | **約2.6倍高速** |

※ 実測値（MacBook Pro M4, 3回計測の平均値）

約2.6倍の高速化が確認できました。事前生成型定義（0.45秒）には及ばないものの、既存のワークフローを変更せずに導入できる点が大きなメリットです。

#### エディタでの型補完の高速化

ここまでビルド時間で測定してきましたが、本来の課題は**エディタでの型補完の遅さ**でした。tsgoはVS Codeの拡張機能としても利用でき、エディタ上のTypeScriptサーバーをtsgoに置き換えることで、リアルタイムの型チェックや補完を高速化できます。

#### VS Codeでの導入方法

VS Codeの設定（.vscode/settings.json）でtsgoを有効化するだけです：

```json
{
  "typescript.experimental.useTsgo": true
}
```

#### 採用した理由

エディタ拡張でtsgoを使うことで、以下のメリットがありました：

- **既存のワークフローを変更不要**：コードの書き方は従来通り
- **エディタでの補完が高速化**：型チェックの処理速度が改善される
- **自動適用**：開発者が意識せずに恩恵を受けられる

ベンチマークでは約2.6倍の改善でしたが、実際のプロジェクトでは体感的により大きな効果がありました。具体的には、これまで数秒待っていた入力補完が一瞬で表示されるようになるなど、開発体験が劇的に向上しました。

事前生成型定義ほどの劇的な改善ではありませんが、導入コストとのバランスを考慮した結果、tsgoによるエディタ拡張が最も現実的な解決策となりました。

# 課題2: テスト実行速度の低下

型補完の改善に続き、テスト実行速度の最適化に取り組みました。

なお、本プロジェクトでは最初からBunのテストランナーを使用していました。もしJestを使っていたら、VitestやBunへの移行を検討したかもしれませんが、今回は特にテストランナー自体を変更する必要はありませんでした。

## ボトルネックの特定

テストケース数に比例して実行時間が線形に増加しており、その原因を調査しました。

各テスト後、テストデータのクリーンアップとして以下の処理を実行していました：

1. すべてのテーブルを`TRUNCATE`でクリア
2. 次のテストに必要なシードデータを`INSERT`

データ量自体は少ないものの、テーブル数が多いことで、この**クリーンアップ処理**が主なボトルネックになっていると推測されます。

## TRUNCATEからDELETEへの変更

最初の改善として、`TRUNCATE`から`DELETE`への変更を試みました。`TRUNCATE`はテーブル全体をリセットするため、データ量が少ない場合でもオーバーヘッドが大きくなります。一方、`DELETE`は行単位での削除となり、少量のデータに対しては効率的です。

詳細な比較については、以下のスクラップにまとめています：
https://zenn.dev/ghken/scraps/be9eb7aae9a914

結果として一定の効果がありましたが、テストケースが大量になると、それでも実行時間が気になるレベルでした。

## tmpfsによる高速化

`DELETE`への変更で一定の改善は見られたものの、さらなる高速化を目指してtmpfsの導入を検討しました。tmpfsは、メモリ上に作成されるファイルシステムで、ディスクI/Oをメモリアクセスに置き換えることができます。

### docker-composeでの設定

```yaml
services:
  mysql-test:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: test
      MYSQL_DATABASE: test
    tmpfs:
      # データディレクトリをメモリ上に配置
      - /var/lib/mysql
    ports:
      - "3306:3306"
```

### tmpfsのパフォーマンス検証

検証用プロジェクト（200テーブル、50テストケース）で測定しました。

:::details 検証用テストコードの例（一部抜粋）

```typescript
import { test, expect, beforeEach } from 'bun:test';
import { sql } from 'drizzle-orm';
import { db } from './db';
import * as schema from './schema';

// 各テスト前にすべてのテーブルをクリーンアップ
beforeEach(async () => {
  // 外部キー制約を一時的に無効化
  await db.execute(sql`SET FOREIGN_KEY_CHECKS = 0`);

  // 200テーブルすべてをDELETEでクリア
  for (let i = 1; i <= 100; i++) {
    await db.execute(sql.raw(`DELETE FROM children${i}`));
    await db.execute(sql.raw(`DELETE FROM dummy${i}`));
  }

  // 外部キー制約を再度有効化
  await db.execute(sql`SET FOREIGN_KEY_CHECKS = 1`);

  // シードデータを投入
  for (let i = 1; i <= 100; i++) {
    const tableName = `dummy${i}`;
    const table = schema[tableName];
    await db.insert(table).values({
      id: `seed-${i}`,
      name: `Seed ${i}`,
      value: i,
      status: 'active',
    });
  }
});

test('データ作成のテスト', async () => {
  const table = schema.dummy1;
  const [inserted] = await db.insert(table).values({
    id: 'test-100',
    name: 'Test User',
    value: 100,
    status: 'active',
  });

  expect(inserted).toBeDefined();
});

// ... 50テストケース分
```
:::

| パターン | 実行時間 | 改善率 |
|---------|---------|--------|
| DELETE (通常) | 7.84秒 | - |
| DELETE (tmpfs) | 3.00秒 | **2.6倍高速** |

※ 実測値（MacBook Pro M4, 3回計測の平均値）

tmpfsの導入により、ディスクI/Oがボトルネックとなっていた`DELETE`やシードデータの`INSERT`が高速化されました。

しかし、`DELETE` + tmpfsの組み合わせでもテスト数が増えるとクリーンアップのオーバーヘッドは無視できず、より根本的な解決策が必要でした。

## Railsのテストから学ぶ

以前、Railsのプロジェクトで開発していた際、テーブル数が多くてもテストが比較的高速に実行されていました。その仕組みを調べると、**トランザクションを使ったテストの分離**が採用されていることがわかりました。

Railsでは、各テストをトランザクション内で実行し、テスト終了時に自動でロールバックすることで、テーブルのクリーンアップを不要にしています。この手法であれば、テーブル数に関係なくロールバックは高速です。

### TypeScriptでの実現方法

同じことをTypeScriptで実現するには、ネストしたトランザクションをサポートしているORMが必要です。テストフレームワークが使うトランザクションの中で、テストコード自体がトランザクションを使う可能性があるためです。

今回のプロジェクトでDrizzle ORMを採用した理由の一つがこれです。Prismaではネストしたトランザクションがファーストパーティーでサポートされていないのに対し、Drizzleはネストしたトランザクションをネイティブにサポートしています。

## トランザクションによる自動ロールバック

### 基本的な仕組み

Drizzleのトランザクションを使うと、トランザクション内で行われた変更は、トランザクションがコミットされない限りロールバックされます。この性質を利用して、テスト内で明示的にロールバックすることで、テーブルのクリーンアップを不要にできます。

```typescript
import { drizzle } from 'drizzle-orm/node-postgres'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'

const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
})

const db = drizzle(pool)

test('ユーザー作成', async () => {
  await db.transaction(async (tx) => {
    // トランザクション内でテストデータを作成
    const [user] = await tx.insert(users).values({
      name: 'test'
    }).returning()

    // テスト実行
    expect(user.name).toBe('test')

    // トランザクションが終わると自動ロールバック
  })

  // データベースは元の状態に戻っている
})
```

### テストヘルパーの実装

毎回トランザクションを書くのは冗長なので、テストヘルパー関数を作成します。また、テストが失敗した場合でも確実にロールバックされるように、`finally`ブロックで明示的にエラーをthrowしてロールバックを強制します。

Drizzleでは、トランザクションオブジェクトに`rollback()`メソッドがありますが、これは内部的に例外をthrowしているだけです。そのため、ここでは`rollback()`を呼ぶ代わりに直接エラーをthrowすることで、同じ効果を得ています。

```typescript
// テストヘルパー
export async function withTestTransaction<T>(
  fn: (tx: Transaction) => Promise<T>
): Promise<T> {
  return db.transaction(async (tx) => {
    try {
      return await fn(tx)
    } finally {
      // 明示的にロールバック（テスト失敗時も確実に実行）
      // tx.rollback() と同じ効果（内部的には例外をthrowしているだけ）
      throw new Error('ROLLBACK')
    }
  }).catch((e) => {
    if (e.message === 'ROLLBACK') return
    throw e
  })
}

// 使用例
test('複雑なテスト', async () => {
  await withTestTransaction(async (tx) => {
    const user = await tx.insert(users).values({...}).returning()
    const post = await tx.insert(posts).values({...}).returning()

    // どんなに複雑なデータを作っても自動クリーンアップ
  })
})
```

### トランザクションのパフォーマンス検証

tmpfs環境で、DELETEによるクリーンアップとトランザクションによるロールバックを比較しました。

検証条件：
- **200個のDrizzleテーブル定義**（dummy1~100 + children1~100）
- **50個のテストケース**
- **tmpfs環境**

#### 測定結果（50テストケース、Bun）

| パターン | 実行時間 | 改善率 |
|---------|---------|--------|
| DELETE (tmpfs) | 3.00秒 | - |
| Transaction (tmpfs) | 0.12秒 | **25倍高速** |

※ 実測値（MacBook Pro M4, 3回計測の平均値）

#### 結果の考察

トランザクションロールバックが圧倒的に高速です。DELETEではテーブル数に比例してクリーンアップ時間が増加しますが、トランザクションロールバックはテーブル数に関係なく一定時間で完了します。これは、ロールバックの場合、コミット時に発生する実際のテーブルへの書き込みが不要なためです。このコミット処理のオーバーヘッドが大きく、それをスキップできることが高速化の要因となっています。

### Honoでの実装

実際のプロジェクトではHonoを利用しており、Honoのテストでは少し工夫が必要です。Honoは`request`メソッドでcontextを渡すことができるため、この仕組みを活用します。

```typescript
import { Hono } from 'hono'
import { test, expect } from 'bun:test'
import { eq } from 'drizzle-orm'
import { users } from './schema'

const app = new Hono()
  .get('/users/:id', async (c) => {
    // contextからDrizzleのトランザクションオブジェクトを取得
    const db = c.env.db
    const { id } = c.req.param()

    const user = await db.query.users.findFirst({
      where: eq(users.id, id)
    })

    return c.json(user)
  })

// テストコード
test('ユーザー取得', async () => {
  await db.transaction(async (tx) => {
    // テストデータを作成
    await tx.insert(users).values({
      id: 'test-1',
      name: 'Test User'
    })

    // トランザクションオブジェクトをcontextに渡す
    const res = await app.request('/users/test-1', {}, { db: tx })
    const data = await res.json()

    expect(data.name).toBe('Test User')

    // トランザクション終了時に自動でロールバック
  })
})
```

この実装により、リクエスト処理内で使用されるデータベース操作もすべてテスト用のトランザクション内で実行され、テスト完了時に自動でロールバックされます。

## 採用した解決策

測定結果から、以下の構成を採用しました：

- **テストランナー**: Bun
- **クリーンアップ手法**: トランザクションロールバック（DELETEより25倍高速）
- **データベース環境**: tmpfs

この構成により、50テストケースの実行時間を**0.12秒**まで短縮できました。

# その他の検討した施策

## 並列実行

Bunのテストランナーは最近並列実行をサポートするようになりました。並列で実行できればさらなる高速化が期待できるため、今後試してみたいと考えています。

# まとめ

## 型補完の遅延対策

型推論の複雑さによるエディタの補完遅延に対して、**tsgo**（TypeScriptコンパイラのGoによる再実装）を導入しました。約2.6倍の高速化を達成し、アプリケーションの規模が大きくなっても快適な開発が可能になりました。

## テスト速度の最適化

テストのクリーンアップ処理のボトルネックに対して、段階的な改善を行いました：

1. **TRUNCATEからDELETEへ変更**：データ量が少ない場合に効率的
2. **tmpfsの導入**：DELETEとシードデータのINSERTが2.6倍高速化（7.84秒→3.00秒）
3. **トランザクションロールバック**：コミット処理が不要になり25倍高速化（3.00秒→0.12秒）

最終的に、Drizzleのネストしたトランザクションサポートを活用し、Honoのテストでも適用できる形で実装しました。

## 今後の展望

- Bunのテストランナーの並列実行機能を試す
- 他のボトルネックの特定と改善

# 参考リンク

- [Hono](https://hono.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [tsgo (@typescript/native-preview)](https://github.com/microsoft/TypeScript/tree/native-preview)
- [TRUNCATE vs DELETE の比較（スクラップ）](https://zenn.dev/ghken/scraps/be9eb7aae9a914)
- [Docker tmpfs](https://docs.docker.com/storage/tmpfs/)
- [Bun Testing](https://bun.sh/docs/cli/test)