import { writeFileSync } from "fs";

// 型推論テストと同じ構成: 100個のダミーテーブル + 100個のchildrenテーブル
const generateSchema = () => {
	const imports = `import { mysqlTable, varchar, int, timestamp } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';\n\n`;

	// メインテーブル（dummy1~100）
	const mainTables = Array.from({ length: 100 }, (_, i) => {
		const tableName = `dummy${i + 1}`;
		return `export const ${tableName} = mysqlTable('${tableName}', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  value: int('value').notNull(),
  description: varchar('description', { length: 255 }),
  status: varchar('status', { length: 255 }).notNull(),
  metadata: varchar('metadata', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});`;
	}).join("\n\n");

	// 子テーブル（children1~100）
	const childTables = Array.from({ length: 100 }, (_, i) => {
		const tableName = `children${i + 1}`;
		return `export const ${tableName} = mysqlTable('${tableName}', {
  id: varchar('id', { length: 255 }).primaryKey(),
  parentId: varchar('parent_id', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: varchar('content', { length: 255 }),
  order: int('order').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});`;
	}).join("\n\n");

	// リレーション定義
	const relationDefs = Array.from({ length: 100 }, (_, i) => {
		const mainName = `dummy${i + 1}`;
		const childName = `children${i + 1}`;
		return `export const ${mainName}Relations = relations(${mainName}, ({ many }) => ({
  children: many(${childName}),
}));

export const ${childName}Relations = relations(${childName}, ({ one }) => ({
  parent: one(${mainName}, {
    fields: [${childName}.parentId],
    references: [${mainName}.id],
  }),
}));`;
	}).join("\n\n");

	const content = `${imports}${mainTables}\n\n${childTables}\n\n${relationDefs}\n`;
	writeFileSync("./src/schema.ts", content);
	console.log(
		"✅ Schema generated: 100 main tables + 100 child tables with relations",
	);
};

generateSchema();
