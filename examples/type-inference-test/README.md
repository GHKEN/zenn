# 型推論パフォーマンス検証

Honoの動的型推論 vs 事前生成型定義のビルド時間比較

## セットアップ

```bash
bun install
```

## ステップ1: スキーマとルートを生成

```bash
bun run generate:schema
bun run generate:routes
```

これにより以下が生成されます：
- `src/schema.ts`: 100個のDrizzleテーブル定義
- `src/app.ts`: 100個のHonoエンドポイント

## ステップ2: 型定義を生成（静的パターン用）

```bash
bun run generate:types
```

`dist/` ディレクトリに型定義ファイルが生成されます。

## ステップ3: 計測

### 動的型推論パターン

```bash
bun run measure:dynamic
```

`client/dynamic.ts` で `import type { AppType } from '../src/app'` を使用してビルド時間を計測。

### 事前生成型定義パターン

```bash
bun run measure:static
```

`client/static.ts` で `import type { AppType } from '../dist/app'` を使用してビルド時間を計測。

## 結果

両方のコマンドを実行して、ビルド時間を比較してください。
