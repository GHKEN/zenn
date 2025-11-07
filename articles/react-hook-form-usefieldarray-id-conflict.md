---
title: "react-hook-formのuseFieldArrayでidが上書きされる問題"
emoji: "🔄"
type: "tech"
topics: ["react", "typescript", "reacthookform"]
published: true
---

こんにちは、RITの福田（[@gendaihyousyou](https://x.com/gendaihyousyou)）です

react-hook-formの`useFieldArray`を使用する際、配列の要素に`id`プロパティが含まれていると、`useFieldArray`が内部管理用に自動生成する`id`によって上書きされてしまう問題に遭遇しました。

## 例えば

以下のようなデータ構造を考えます：

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};
```

このデータを`useFieldArray`で管理しようとすると：

```typescript
const { fields } = useFieldArray({
  control,
  name: "users"
});

// fieldsの各要素には、元のidではなく、
// useFieldArrayが生成したuuidのようなidが入っている
```

`fields`配列の各要素を見ると、元のデータの`id: 1`などが`id: "abc123..."`のようなランダムな文字列に置き換わっています。

## なぜこの問題が起きるのか

`useFieldArray`は、Reactのkey管理とフォームの状態管理を効率的に行うため、内部的に一意の`id`を各要素に付与します。

しかし、この`id`がユーザーデータの`id`と衝突してしまいます。

## 解決方法

### 方法1: フィールド名を変更する（推奨）

データ構造自体を変更できる場合、`id`以外のフィールド名を使用します：

```typescript
type User = {
  userId: number;  // idからuserIdに変更
  name: string;
  email: string;
};

const { fields } = useFieldArray({
  control,
  name: "users"
});

// fields[0].userId で元のIDにアクセスできる
// fields[0].id はuseFieldArrayが管理するID
```

### 方法2: keyNameオプションを使用する

`useFieldArray`の`keyName`オプションで、内部管理用のキー名を変更できます：

```typescript
const { fields } = useFieldArray({
  control,
  name: "users",
  keyName: "_id"  // デフォルトの"id"の代わりに"_id"を使用
});

// fields[0].id で元のIDにアクセスできる
// fields[0]._id がuseFieldArrayが管理するID
```


```tsx
{fields.map((field, index) => (
  <div key={field.id}>
    <p>ID: {field.id}</p> {/* 元のidにアクセス可能 */}
    {/* ... */}
  </div>
))}
```

#### 注意：keyNameの将来性について

[公式ドキュメント](https://react-hook-form.com/docs/usefieldarray)によると、`keyName`オプションは次のメジャーバージョンで削除される予定とされているんですが、現時点で代替策は示されておらず、[GitHub Discussions](https://github.com/orgs/react-hook-form/discussions/8935)でも多数の報告があるものの、明確な解決策は提示されていない状況です。

そのため、楽な解決方法はkeyNameの方なんですが、将来的なことを考えるとidのキーを変えられるようなら変えたほうが安全そうですね。

## まとめ

- `useFieldArray`は内部管理用に`id`を自動生成する
- 元データに`id`がある場合、上書きされてしまう
- 解決方法は主に2つ：
  1. フィールド名を変更する（`userId`など）← 推奨
  2. `keyName`オプションを使用する
