import { writeFileSync } from "fs";

// 100個のダミーテーブルスキーマと、それぞれに対応する100個のchildrenテーブルを生成
const generateSchema = () => {
	const imports = `import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';\n\n`;

	// メインテーブル（dummy1~100）
	const mainTables = Array.from({ length: 100 }, (_, i) => {
		const tableName = `dummy${i + 1}`;
		return `export const ${tableName} = pgTable('${tableName}', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  value: integer('value').notNull(),
  description: text('description'),
  status: text('status').notNull(),
  metadata: text('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});`;
	}).join("\n\n");

	// 子テーブル（children1~100）
	const childTables = Array.from({ length: 100 }, (_, i) => {
		const tableName = `children${i + 1}`;
		return `export const ${tableName} = pgTable('${tableName}', {
  id: text('id').primaryKey(),
  parentId: text('parent_id').notNull(),
  title: text('title').notNull(),
  content: text('content'),
  order: integer('order').notNull(),
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
