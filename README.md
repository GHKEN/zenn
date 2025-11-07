# blog

Zennに投稿する記事とその中で検証に使うサンプルコードをまとめたmonorepoリポジトリです。

## 構成

- `articles/` - Zenn記事（markdown）
- `books/` - Zenn本（markdown）
- `examples/` - 記事の検証用サンプルコード（workspace packages）
  - `react-hook-form-id-issue/` - React Hook Formの検証
  - `test-performance-benchmark/` - テストパフォーマンスベンチマーク
  - `type-inference-benchmark/` - TypeScript型推論ベンチマーク

## セットアップ

このプロジェクトはBun workspacesを使用したmonorepo構成です。

```bash
# すべての依存関係をインストール
bun install
```

## Zenn CLI

記事のプレビューと管理：

```bash
# 記事をプレビュー
npx zenn preview

# 新しい記事を作成
npx zenn new:article

# 新しい本を作成
npx zenn new:book
```

## Examples（サンプルコード）

各exampleパッケージは独立して実行できます：

```bash
# 特定のパッケージでコマンドを実行
cd examples/<package-name>
bun install  # 不要（ルートのbun installで解決済み）
bun run <script>

# または、ルートから実行
bun run --filter=<package-name> <script>
```

## 開発

```bash
# コードのリント
bun run lint

# コードの自動修正
bun run lint:fix

# コードのフォーマット
bun run format
```

---

Built with [Bun](https://bun.com) and [Zenn CLI](https://zenn.dev/zenn/articles/zenn-cli-guide)
