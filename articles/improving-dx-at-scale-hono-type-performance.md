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

しかし、開発が進むにつれて問題が顕在化してきました

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

// 完全に型安全
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

効果を定量的に測定するため、以下の条件で検証用プロジェクトを作成しました：

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

完全な検証コードは[こちら](リンク)にあります。
:::

#### 測定結果

| 方式 | ビルド時間 | 改善率 |
|------|-----------|--------|
| 動的型推論（`typeof app`） | 2.37秒 | - |
| 事前生成型定義（.d.ts） | 0.45秒 | **約5.3倍高速** |

※ 実測値（MacBook Pro M4, TypeScript 5.9.3, 3回計測の平均値）

### 検証したアプローチ1: 型定義の事前生成

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

## 問題の詳細

テストケースが増えるにつれて、実行時間が線形に増加していきました。原因として考えられるのは：

- データベースのデータ量が累積
- テーブルロックの競合
- ディスクI/Oの増加

特にディスクI/Oがボトルネックになっている可能性がありました。

## 解決策: トランザクションによる自動ロールバック

### Drizzleでのトランザクション活用

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

#### テストヘルパーの実装

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

#### ネストしたトランザクションの活用

```typescript
test('ネストした処理のテスト', async () => {
  await db.transaction(async (tx1) => {
    const user = await tx1.insert(users).values({...}).returning()

    // さらにネスト
    await tx1.transaction(async (tx2) => {
      const post = await tx2.insert(posts).values({
        authorId: user.id
      }).returning()

      // 内側のトランザクションだけロールバックも可能
    })
  })
})
```

#### なぜDrizzleを選んだか

Drizzleはネストしたトランザクションをネイティブにサポートしています。Prismaでもサードパーティのライブラリを使えばネストしたトランザクションを扱えますが、公式サポートではないため、安定性とメンテナンスの観点から今回はDrizzleを採用しました。

### パフォーマンス検証

効果を定量的に測定するため、以下の条件で検証用プロジェクトを作成しました：

- **200個のDrizzleテーブル定義**（dummy1~100 + children1~100）
- **50個のテストケース**
- クリーンアップ方法: TRUNCATE vs トランザクション
- ストレージ: 通常ディスク vs tmpfs

#### 測定結果（50テストケース、Bun）

| パターン | 実行時間 | 改善率 |
|---------|---------|--------|
| TRUNCATE (通常) | 56.81秒 | - |
| TRUNCATE (tmpfs) | 16.21秒 | **3.5倍高速** |
| Transaction (通常) | 0.12秒 | **473倍高速** |
| Transaction (tmpfs) | 0.12秒 | **473倍高速** |

※ 実測値（MacBook Pro M4, 3回計測の平均値）
※ vitestでも同様の傾向（トランザクションパターンで0.72秒）

#### 主な発見

1. **トランザクションロールバックが圧倒的に高速**
   - TRUNCATEは200テーブル全体をクリアする必要があるため遅い
   - トランザクションはメモリ上の変更を破棄するだけなので高速

2. **tmpfsの効果はTRUNCATEで顕著**
   - TRUNCATEパターン: 約3.5倍の高速化
   - トランザクションパターン: 効果なし（すでに十分高速）

## tmpfsによるさらなる高速化

tmpfsは、メモリ上に作成されるファイルシステムです。ディスクI/Oではなくメモリアクセスになるため、高速化が期待できます。

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

### 効果

上記の測定結果から、tmpfsの効果は**クリーンアップ手法に依存**することがわかりました：

- **TRUNCATEパターン**: 約3.5倍の高速化
- **トランザクションパターン**: 効果なし（すでに十分高速）

TRUNCATEはtmpfs環境で3.5倍高速化しましたが、トランザクションパターンではストレージの影響はほぼ見られませんでした。この結果から、TRUNCATEは何らかのストレージ操作がボトルネックになっている可能性があります。

### 注意点

tmpfsを使う際の注意点：

1. **メモリ容量に注意**
   - データベースのサイズがメモリに収まる必要がある
   - テスト用途なら通常問題ない

2. **データは揮発する**
   - コンテナ停止時にデータは消える
   - テスト用途なので問題ない

3. **本番環境では使わない**
   - あくまでテスト用の最適化

## 採用した解決策

測定結果から、以下の構成を採用しました：

- **テストランナー**: Bun
- **クリーンアップ手法**: トランザクションロールバック（TRUNCATEより473倍高速）
- **tmpfs**: 不要（トランザクションで十分高速）

```typescript
import { test, expect } from 'bun:test';
import { db } from './db';
import { DrizzleError } from 'drizzle-orm';

function withTransaction(fn) {
  return async () => {
    let testFailure;
    try {
      await db.transaction(async (tx) => {
        try {
          await fn(tx);
        } catch (e) {
          testFailure = e;
        } finally {
          tx.rollback();
        }
      });
    } catch (e) {
      if (testFailure) throw testFailure;
      if (e instanceof DrizzleError) return;
      throw e;
    }
  };
}

test('ユーザー作成', withTransaction(async (tx) => {
  const user = await tx.insert(users).values({
    name: 'test'
  }).returning();

  expect(user.name).toBe('test');
  // トランザクション終了時に自動ロールバック
}));
```

### 最終的な効果

50テストケースの実行時間が**56.81秒 → 0.12秒**に短縮され、**約473倍の高速化**を達成しました。

# その他の検討した施策

## 並列実行

TBD

<!-- Bunのテストランナーは並列実行をサポートしています。

```bash
bun test --concurrent
```

ただし、データベースを使うテストでは：

- トランザクション分離レベルの問題
- テストデータの競合

が発生する可能性があるため、慎重に検討する必要があります。

Drizzleのトランザクション + tmpfsの組み合わせなら、並列実行しても問題ないケースが多いです。 -->

## テストの選択的実行

```bash
# 特定のファイルだけ実行
bun test src/users.test.ts

# パターンマッチ
bun test --filter="user"
```

開発中は関連するテストだけ実行し、CIでは全件実行する運用も効果的です。

# まとめ

## 型補完の遅延対策

- ルート分割やtsconfig最適化は限定的
- **tsgo** による根本的な解決
- エンドポイント数百規模でも快適な開発が可能に

## テスト速度の最適化

- **Bunテストランナー**の採用
- **Drizzleのトランザクションロールバック**で自動クリーンアップ（TRUNCATEより473倍高速）
- **tmpfs**の効果は限定的（トランザクションですでに十分高速）
- 最終的に473倍の高速化を達成

## 学んだこと

1. **DXの悪化は早めに対処する**
   - 後回しにすると改善コストが増大
   - チーム全体の生産性に影響

2. **複数の最適化を組み合わせる**
   - 1つの施策では限界がある
   - 相乗効果を狙う

3. **ツール選択の重要性**
   - 問題に適したツールを選ぶ
   - 移行コストを恐れずに検討する

## 今後の展望

- tsgoのさらなる活用
- テストの並列実行の最適化
- 他のボトルネックの特定と改善

# 参考リンク

- [Hono](https://hono.dev/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Docker tmpfs](https://docs.docker.com/storage/tmpfs/)
- [Bun Testing](https://bun.sh/docs/cli/test)