import { beforeEach, expect, test } from "bun:test";
import { sql } from "drizzle-orm";
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
		const tableName = `dummy${(i % 100) + 1}`;
		const table = schema[tableName as keyof typeof schema] as any;

		const [inserted] = await db.insert(table).values({
			id: `test-${i}`,
			name: `Test ${i}`,
			value: i,
			status: "active",
		});

		expect(inserted).toBeDefined();
	});
}
