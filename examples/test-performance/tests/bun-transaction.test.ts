import { expect, test } from "bun:test";
import { DrizzleError } from "drizzle-orm";
import type { MySql2Database } from "drizzle-orm/mysql2";
import { db } from "../src/db";
import * as schema from "../src/schema";

function withTransaction(
	fn: (tx: MySql2Database<typeof schema>) => Promise<void>,
) {
	return async () => {
		let testFailure: unknown;
		try {
			await db.transaction(async (tx) => {
				try {
					await fn(tx);
				} catch (e) {
					testFailure = e;
				} finally {
					// 必ずロールバック
					tx.rollback();
				}
			});
		} catch (e) {
			if (testFailure) throw testFailure;
			if (e instanceof DrizzleError) {
				// ロールバックによるエラーは正常
				return;
			}
			throw e;
		}
	};
}

// 各テストをトランザクション内で実行し、自動ロールバック
for (let i = 1; i <= 50; i++) {
	test(
		`test case ${i}`,
		withTransaction(async (tx) => {
			const tableName = `dummy${(i % 100) + 1}`;
			const table = schema[tableName as keyof typeof schema] as any;

			const [inserted] = await tx.insert(table).values({
				id: `test-${i}`,
				name: `Test ${i}`,
				value: i,
				status: "active",
			});

			expect(inserted).toBeDefined();
		}),
	);
}
