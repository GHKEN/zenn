# Test Performance Benchmark

テストランナーとクリーンアップ手法によるパフォーマンスの違いを計測します。

## 測定パターン

### テストランナー
- bun:test
- vitest

### クリーンアップ手法
- **TRUNCATE**: beforeEachでテーブルをTRUNCATEしてリセット
- **Transaction**: 各テストをトランザクション内で実行し、終了時にロールバック

### データベース
- 通常のディスク
- tmpfs（メモリベース）

## セットアップ

```bash
# 依存関係のインストール
bun install

# スキーマ生成
bun run generate:schema

# Dockerでデータベース起動
bun run docker:up

# データベースにスキーマをpush
bun run db:push
```

## 測定実行

```bash
# 全パターンの測定
bun run measure:all

# 個別のパターンを測定
bun run test:bun-truncate
bun run test:bun-transaction
bun run test:vitest-truncate
bun run test:vitest-transaction
```

## テーブル構成

型推論ベンチマークと同じ構成を使用：
- 100個のメインテーブル（dummy1~100）
- 100個の子テーブル（children1~100）
- 各テストケース: 50個

## クリーンアップ

```bash
# Dockerコンテナの停止と削除
bun run docker:down
```
