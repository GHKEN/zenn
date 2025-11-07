import { sql } from "drizzle-orm";
import type { MySqlTable } from "drizzle-orm/mysql-core";
import { beforeEach, expect, test } from "vitest";
import { db } from "../src/db";
import * as schema from "../src/schema";

// beforeEachでTRUNCATEを使用
beforeEach(async () => {
	// 外部キー制約を一時的に無効化
	await db.execute(sql`SET FOREIGN_KEY_CHECKS = 0`);

	// 全テーブルをTRUNCATE
	for (let i = 1; i <= 100; i++) {
		await db.execute(sql.raw(`TRUNCATE TABLE dummy${i}`));
		await db.execute(sql.raw(`TRUNCATE TABLE children${i}`));
	}

	// 外部キー制約を再度有効化
	await db.execute(sql`SET FOREIGN_KEY_CHECKS = 1`);
});

// 50個のテストケース
for (let i = 1; i <= 50; i++) {
	test(`test case ${i}`, async () => {
		const tableName = `dummy${(i % 100) + 1}` as keyof typeof schema;
		// biome-ignore lint/performance/noDynamicNamespaceImportAccess: テストで動的アクセスが必要
		const table = schema[tableName] as MySqlTable;

		const [inserted] = await db.insert(table).values({
			id: `test-${i}`,
			name: `Test ${i}`,
			value: i,
			status: "active",
		});

		expect(inserted).toBeDefined();
	});
}
