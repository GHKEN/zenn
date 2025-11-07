import { relations } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const dummy1 = mysqlTable("dummy1", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy2 = mysqlTable("dummy2", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy3 = mysqlTable("dummy3", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy4 = mysqlTable("dummy4", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy5 = mysqlTable("dummy5", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy6 = mysqlTable("dummy6", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy7 = mysqlTable("dummy7", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy8 = mysqlTable("dummy8", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy9 = mysqlTable("dummy9", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy10 = mysqlTable("dummy10", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy11 = mysqlTable("dummy11", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy12 = mysqlTable("dummy12", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy13 = mysqlTable("dummy13", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy14 = mysqlTable("dummy14", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy15 = mysqlTable("dummy15", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy16 = mysqlTable("dummy16", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy17 = mysqlTable("dummy17", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy18 = mysqlTable("dummy18", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy19 = mysqlTable("dummy19", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy20 = mysqlTable("dummy20", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy21 = mysqlTable("dummy21", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy22 = mysqlTable("dummy22", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy23 = mysqlTable("dummy23", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy24 = mysqlTable("dummy24", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy25 = mysqlTable("dummy25", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy26 = mysqlTable("dummy26", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy27 = mysqlTable("dummy27", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy28 = mysqlTable("dummy28", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy29 = mysqlTable("dummy29", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy30 = mysqlTable("dummy30", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy31 = mysqlTable("dummy31", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy32 = mysqlTable("dummy32", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy33 = mysqlTable("dummy33", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy34 = mysqlTable("dummy34", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy35 = mysqlTable("dummy35", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy36 = mysqlTable("dummy36", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy37 = mysqlTable("dummy37", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy38 = mysqlTable("dummy38", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy39 = mysqlTable("dummy39", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy40 = mysqlTable("dummy40", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy41 = mysqlTable("dummy41", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy42 = mysqlTable("dummy42", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy43 = mysqlTable("dummy43", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy44 = mysqlTable("dummy44", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy45 = mysqlTable("dummy45", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy46 = mysqlTable("dummy46", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy47 = mysqlTable("dummy47", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy48 = mysqlTable("dummy48", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy49 = mysqlTable("dummy49", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy50 = mysqlTable("dummy50", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy51 = mysqlTable("dummy51", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy52 = mysqlTable("dummy52", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy53 = mysqlTable("dummy53", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy54 = mysqlTable("dummy54", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy55 = mysqlTable("dummy55", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy56 = mysqlTable("dummy56", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy57 = mysqlTable("dummy57", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy58 = mysqlTable("dummy58", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy59 = mysqlTable("dummy59", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy60 = mysqlTable("dummy60", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy61 = mysqlTable("dummy61", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy62 = mysqlTable("dummy62", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy63 = mysqlTable("dummy63", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy64 = mysqlTable("dummy64", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy65 = mysqlTable("dummy65", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy66 = mysqlTable("dummy66", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy67 = mysqlTable("dummy67", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy68 = mysqlTable("dummy68", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy69 = mysqlTable("dummy69", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy70 = mysqlTable("dummy70", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy71 = mysqlTable("dummy71", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy72 = mysqlTable("dummy72", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy73 = mysqlTable("dummy73", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy74 = mysqlTable("dummy74", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy75 = mysqlTable("dummy75", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy76 = mysqlTable("dummy76", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy77 = mysqlTable("dummy77", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy78 = mysqlTable("dummy78", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy79 = mysqlTable("dummy79", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy80 = mysqlTable("dummy80", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy81 = mysqlTable("dummy81", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy82 = mysqlTable("dummy82", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy83 = mysqlTable("dummy83", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy84 = mysqlTable("dummy84", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy85 = mysqlTable("dummy85", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy86 = mysqlTable("dummy86", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy87 = mysqlTable("dummy87", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy88 = mysqlTable("dummy88", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy89 = mysqlTable("dummy89", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy90 = mysqlTable("dummy90", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy91 = mysqlTable("dummy91", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy92 = mysqlTable("dummy92", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy93 = mysqlTable("dummy93", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy94 = mysqlTable("dummy94", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy95 = mysqlTable("dummy95", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy96 = mysqlTable("dummy96", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy97 = mysqlTable("dummy97", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy98 = mysqlTable("dummy98", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy99 = mysqlTable("dummy99", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy100 = mysqlTable("dummy100", {
	id: varchar("id", { length: 255 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	value: int("value").notNull(),
	description: varchar("description", { length: 255 }),
	status: varchar("status", { length: 255 }).notNull(),
	metadata: varchar("metadata", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const children1 = mysqlTable("children1", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children2 = mysqlTable("children2", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children3 = mysqlTable("children3", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children4 = mysqlTable("children4", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children5 = mysqlTable("children5", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children6 = mysqlTable("children6", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children7 = mysqlTable("children7", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children8 = mysqlTable("children8", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children9 = mysqlTable("children9", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children10 = mysqlTable("children10", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children11 = mysqlTable("children11", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children12 = mysqlTable("children12", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children13 = mysqlTable("children13", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children14 = mysqlTable("children14", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children15 = mysqlTable("children15", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children16 = mysqlTable("children16", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children17 = mysqlTable("children17", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children18 = mysqlTable("children18", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children19 = mysqlTable("children19", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children20 = mysqlTable("children20", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children21 = mysqlTable("children21", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children22 = mysqlTable("children22", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children23 = mysqlTable("children23", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children24 = mysqlTable("children24", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children25 = mysqlTable("children25", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children26 = mysqlTable("children26", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children27 = mysqlTable("children27", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children28 = mysqlTable("children28", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children29 = mysqlTable("children29", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children30 = mysqlTable("children30", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children31 = mysqlTable("children31", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children32 = mysqlTable("children32", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children33 = mysqlTable("children33", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children34 = mysqlTable("children34", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children35 = mysqlTable("children35", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children36 = mysqlTable("children36", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children37 = mysqlTable("children37", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children38 = mysqlTable("children38", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children39 = mysqlTable("children39", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children40 = mysqlTable("children40", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children41 = mysqlTable("children41", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children42 = mysqlTable("children42", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children43 = mysqlTable("children43", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children44 = mysqlTable("children44", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children45 = mysqlTable("children45", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children46 = mysqlTable("children46", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children47 = mysqlTable("children47", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children48 = mysqlTable("children48", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children49 = mysqlTable("children49", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children50 = mysqlTable("children50", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children51 = mysqlTable("children51", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children52 = mysqlTable("children52", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children53 = mysqlTable("children53", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children54 = mysqlTable("children54", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children55 = mysqlTable("children55", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children56 = mysqlTable("children56", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children57 = mysqlTable("children57", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children58 = mysqlTable("children58", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children59 = mysqlTable("children59", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children60 = mysqlTable("children60", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children61 = mysqlTable("children61", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children62 = mysqlTable("children62", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children63 = mysqlTable("children63", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children64 = mysqlTable("children64", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children65 = mysqlTable("children65", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children66 = mysqlTable("children66", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children67 = mysqlTable("children67", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children68 = mysqlTable("children68", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children69 = mysqlTable("children69", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children70 = mysqlTable("children70", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children71 = mysqlTable("children71", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children72 = mysqlTable("children72", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children73 = mysqlTable("children73", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children74 = mysqlTable("children74", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children75 = mysqlTable("children75", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children76 = mysqlTable("children76", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children77 = mysqlTable("children77", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children78 = mysqlTable("children78", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children79 = mysqlTable("children79", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children80 = mysqlTable("children80", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children81 = mysqlTable("children81", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children82 = mysqlTable("children82", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children83 = mysqlTable("children83", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children84 = mysqlTable("children84", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children85 = mysqlTable("children85", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children86 = mysqlTable("children86", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children87 = mysqlTable("children87", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children88 = mysqlTable("children88", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children89 = mysqlTable("children89", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children90 = mysqlTable("children90", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children91 = mysqlTable("children91", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children92 = mysqlTable("children92", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children93 = mysqlTable("children93", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children94 = mysqlTable("children94", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children95 = mysqlTable("children95", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children96 = mysqlTable("children96", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children97 = mysqlTable("children97", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children98 = mysqlTable("children98", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children99 = mysqlTable("children99", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children100 = mysqlTable("children100", {
	id: varchar("id", { length: 255 }).primaryKey(),
	parentId: varchar("parent_id", { length: 255 }).notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	content: varchar("content", { length: 255 }),
	order: int("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const dummy1Relations = relations(dummy1, ({ many }) => ({
	children: many(children1),
}));

export const children1Relations = relations(children1, ({ one }) => ({
	parent: one(dummy1, {
		fields: [children1.parentId],
		references: [dummy1.id],
	}),
}));

export const dummy2Relations = relations(dummy2, ({ many }) => ({
	children: many(children2),
}));

export const children2Relations = relations(children2, ({ one }) => ({
	parent: one(dummy2, {
		fields: [children2.parentId],
		references: [dummy2.id],
	}),
}));

export const dummy3Relations = relations(dummy3, ({ many }) => ({
	children: many(children3),
}));

export const children3Relations = relations(children3, ({ one }) => ({
	parent: one(dummy3, {
		fields: [children3.parentId],
		references: [dummy3.id],
	}),
}));

export const dummy4Relations = relations(dummy4, ({ many }) => ({
	children: many(children4),
}));

export const children4Relations = relations(children4, ({ one }) => ({
	parent: one(dummy4, {
		fields: [children4.parentId],
		references: [dummy4.id],
	}),
}));

export const dummy5Relations = relations(dummy5, ({ many }) => ({
	children: many(children5),
}));

export const children5Relations = relations(children5, ({ one }) => ({
	parent: one(dummy5, {
		fields: [children5.parentId],
		references: [dummy5.id],
	}),
}));

export const dummy6Relations = relations(dummy6, ({ many }) => ({
	children: many(children6),
}));

export const children6Relations = relations(children6, ({ one }) => ({
	parent: one(dummy6, {
		fields: [children6.parentId],
		references: [dummy6.id],
	}),
}));

export const dummy7Relations = relations(dummy7, ({ many }) => ({
	children: many(children7),
}));

export const children7Relations = relations(children7, ({ one }) => ({
	parent: one(dummy7, {
		fields: [children7.parentId],
		references: [dummy7.id],
	}),
}));

export const dummy8Relations = relations(dummy8, ({ many }) => ({
	children: many(children8),
}));

export const children8Relations = relations(children8, ({ one }) => ({
	parent: one(dummy8, {
		fields: [children8.parentId],
		references: [dummy8.id],
	}),
}));

export const dummy9Relations = relations(dummy9, ({ many }) => ({
	children: many(children9),
}));

export const children9Relations = relations(children9, ({ one }) => ({
	parent: one(dummy9, {
		fields: [children9.parentId],
		references: [dummy9.id],
	}),
}));

export const dummy10Relations = relations(dummy10, ({ many }) => ({
	children: many(children10),
}));

export const children10Relations = relations(children10, ({ one }) => ({
	parent: one(dummy10, {
		fields: [children10.parentId],
		references: [dummy10.id],
	}),
}));

export const dummy11Relations = relations(dummy11, ({ many }) => ({
	children: many(children11),
}));

export const children11Relations = relations(children11, ({ one }) => ({
	parent: one(dummy11, {
		fields: [children11.parentId],
		references: [dummy11.id],
	}),
}));

export const dummy12Relations = relations(dummy12, ({ many }) => ({
	children: many(children12),
}));

export const children12Relations = relations(children12, ({ one }) => ({
	parent: one(dummy12, {
		fields: [children12.parentId],
		references: [dummy12.id],
	}),
}));

export const dummy13Relations = relations(dummy13, ({ many }) => ({
	children: many(children13),
}));

export const children13Relations = relations(children13, ({ one }) => ({
	parent: one(dummy13, {
		fields: [children13.parentId],
		references: [dummy13.id],
	}),
}));

export const dummy14Relations = relations(dummy14, ({ many }) => ({
	children: many(children14),
}));

export const children14Relations = relations(children14, ({ one }) => ({
	parent: one(dummy14, {
		fields: [children14.parentId],
		references: [dummy14.id],
	}),
}));

export const dummy15Relations = relations(dummy15, ({ many }) => ({
	children: many(children15),
}));

export const children15Relations = relations(children15, ({ one }) => ({
	parent: one(dummy15, {
		fields: [children15.parentId],
		references: [dummy15.id],
	}),
}));

export const dummy16Relations = relations(dummy16, ({ many }) => ({
	children: many(children16),
}));

export const children16Relations = relations(children16, ({ one }) => ({
	parent: one(dummy16, {
		fields: [children16.parentId],
		references: [dummy16.id],
	}),
}));

export const dummy17Relations = relations(dummy17, ({ many }) => ({
	children: many(children17),
}));

export const children17Relations = relations(children17, ({ one }) => ({
	parent: one(dummy17, {
		fields: [children17.parentId],
		references: [dummy17.id],
	}),
}));

export const dummy18Relations = relations(dummy18, ({ many }) => ({
	children: many(children18),
}));

export const children18Relations = relations(children18, ({ one }) => ({
	parent: one(dummy18, {
		fields: [children18.parentId],
		references: [dummy18.id],
	}),
}));

export const dummy19Relations = relations(dummy19, ({ many }) => ({
	children: many(children19),
}));

export const children19Relations = relations(children19, ({ one }) => ({
	parent: one(dummy19, {
		fields: [children19.parentId],
		references: [dummy19.id],
	}),
}));

export const dummy20Relations = relations(dummy20, ({ many }) => ({
	children: many(children20),
}));

export const children20Relations = relations(children20, ({ one }) => ({
	parent: one(dummy20, {
		fields: [children20.parentId],
		references: [dummy20.id],
	}),
}));

export const dummy21Relations = relations(dummy21, ({ many }) => ({
	children: many(children21),
}));

export const children21Relations = relations(children21, ({ one }) => ({
	parent: one(dummy21, {
		fields: [children21.parentId],
		references: [dummy21.id],
	}),
}));

export const dummy22Relations = relations(dummy22, ({ many }) => ({
	children: many(children22),
}));

export const children22Relations = relations(children22, ({ one }) => ({
	parent: one(dummy22, {
		fields: [children22.parentId],
		references: [dummy22.id],
	}),
}));

export const dummy23Relations = relations(dummy23, ({ many }) => ({
	children: many(children23),
}));

export const children23Relations = relations(children23, ({ one }) => ({
	parent: one(dummy23, {
		fields: [children23.parentId],
		references: [dummy23.id],
	}),
}));

export const dummy24Relations = relations(dummy24, ({ many }) => ({
	children: many(children24),
}));

export const children24Relations = relations(children24, ({ one }) => ({
	parent: one(dummy24, {
		fields: [children24.parentId],
		references: [dummy24.id],
	}),
}));

export const dummy25Relations = relations(dummy25, ({ many }) => ({
	children: many(children25),
}));

export const children25Relations = relations(children25, ({ one }) => ({
	parent: one(dummy25, {
		fields: [children25.parentId],
		references: [dummy25.id],
	}),
}));

export const dummy26Relations = relations(dummy26, ({ many }) => ({
	children: many(children26),
}));

export const children26Relations = relations(children26, ({ one }) => ({
	parent: one(dummy26, {
		fields: [children26.parentId],
		references: [dummy26.id],
	}),
}));

export const dummy27Relations = relations(dummy27, ({ many }) => ({
	children: many(children27),
}));

export const children27Relations = relations(children27, ({ one }) => ({
	parent: one(dummy27, {
		fields: [children27.parentId],
		references: [dummy27.id],
	}),
}));

export const dummy28Relations = relations(dummy28, ({ many }) => ({
	children: many(children28),
}));

export const children28Relations = relations(children28, ({ one }) => ({
	parent: one(dummy28, {
		fields: [children28.parentId],
		references: [dummy28.id],
	}),
}));

export const dummy29Relations = relations(dummy29, ({ many }) => ({
	children: many(children29),
}));

export const children29Relations = relations(children29, ({ one }) => ({
	parent: one(dummy29, {
		fields: [children29.parentId],
		references: [dummy29.id],
	}),
}));

export const dummy30Relations = relations(dummy30, ({ many }) => ({
	children: many(children30),
}));

export const children30Relations = relations(children30, ({ one }) => ({
	parent: one(dummy30, {
		fields: [children30.parentId],
		references: [dummy30.id],
	}),
}));

export const dummy31Relations = relations(dummy31, ({ many }) => ({
	children: many(children31),
}));

export const children31Relations = relations(children31, ({ one }) => ({
	parent: one(dummy31, {
		fields: [children31.parentId],
		references: [dummy31.id],
	}),
}));

export const dummy32Relations = relations(dummy32, ({ many }) => ({
	children: many(children32),
}));

export const children32Relations = relations(children32, ({ one }) => ({
	parent: one(dummy32, {
		fields: [children32.parentId],
		references: [dummy32.id],
	}),
}));

export const dummy33Relations = relations(dummy33, ({ many }) => ({
	children: many(children33),
}));

export const children33Relations = relations(children33, ({ one }) => ({
	parent: one(dummy33, {
		fields: [children33.parentId],
		references: [dummy33.id],
	}),
}));

export const dummy34Relations = relations(dummy34, ({ many }) => ({
	children: many(children34),
}));

export const children34Relations = relations(children34, ({ one }) => ({
	parent: one(dummy34, {
		fields: [children34.parentId],
		references: [dummy34.id],
	}),
}));

export const dummy35Relations = relations(dummy35, ({ many }) => ({
	children: many(children35),
}));

export const children35Relations = relations(children35, ({ one }) => ({
	parent: one(dummy35, {
		fields: [children35.parentId],
		references: [dummy35.id],
	}),
}));

export const dummy36Relations = relations(dummy36, ({ many }) => ({
	children: many(children36),
}));

export const children36Relations = relations(children36, ({ one }) => ({
	parent: one(dummy36, {
		fields: [children36.parentId],
		references: [dummy36.id],
	}),
}));

export const dummy37Relations = relations(dummy37, ({ many }) => ({
	children: many(children37),
}));

export const children37Relations = relations(children37, ({ one }) => ({
	parent: one(dummy37, {
		fields: [children37.parentId],
		references: [dummy37.id],
	}),
}));

export const dummy38Relations = relations(dummy38, ({ many }) => ({
	children: many(children38),
}));

export const children38Relations = relations(children38, ({ one }) => ({
	parent: one(dummy38, {
		fields: [children38.parentId],
		references: [dummy38.id],
	}),
}));

export const dummy39Relations = relations(dummy39, ({ many }) => ({
	children: many(children39),
}));

export const children39Relations = relations(children39, ({ one }) => ({
	parent: one(dummy39, {
		fields: [children39.parentId],
		references: [dummy39.id],
	}),
}));

export const dummy40Relations = relations(dummy40, ({ many }) => ({
	children: many(children40),
}));

export const children40Relations = relations(children40, ({ one }) => ({
	parent: one(dummy40, {
		fields: [children40.parentId],
		references: [dummy40.id],
	}),
}));

export const dummy41Relations = relations(dummy41, ({ many }) => ({
	children: many(children41),
}));

export const children41Relations = relations(children41, ({ one }) => ({
	parent: one(dummy41, {
		fields: [children41.parentId],
		references: [dummy41.id],
	}),
}));

export const dummy42Relations = relations(dummy42, ({ many }) => ({
	children: many(children42),
}));

export const children42Relations = relations(children42, ({ one }) => ({
	parent: one(dummy42, {
		fields: [children42.parentId],
		references: [dummy42.id],
	}),
}));

export const dummy43Relations = relations(dummy43, ({ many }) => ({
	children: many(children43),
}));

export const children43Relations = relations(children43, ({ one }) => ({
	parent: one(dummy43, {
		fields: [children43.parentId],
		references: [dummy43.id],
	}),
}));

export const dummy44Relations = relations(dummy44, ({ many }) => ({
	children: many(children44),
}));

export const children44Relations = relations(children44, ({ one }) => ({
	parent: one(dummy44, {
		fields: [children44.parentId],
		references: [dummy44.id],
	}),
}));

export const dummy45Relations = relations(dummy45, ({ many }) => ({
	children: many(children45),
}));

export const children45Relations = relations(children45, ({ one }) => ({
	parent: one(dummy45, {
		fields: [children45.parentId],
		references: [dummy45.id],
	}),
}));

export const dummy46Relations = relations(dummy46, ({ many }) => ({
	children: many(children46),
}));

export const children46Relations = relations(children46, ({ one }) => ({
	parent: one(dummy46, {
		fields: [children46.parentId],
		references: [dummy46.id],
	}),
}));

export const dummy47Relations = relations(dummy47, ({ many }) => ({
	children: many(children47),
}));

export const children47Relations = relations(children47, ({ one }) => ({
	parent: one(dummy47, {
		fields: [children47.parentId],
		references: [dummy47.id],
	}),
}));

export const dummy48Relations = relations(dummy48, ({ many }) => ({
	children: many(children48),
}));

export const children48Relations = relations(children48, ({ one }) => ({
	parent: one(dummy48, {
		fields: [children48.parentId],
		references: [dummy48.id],
	}),
}));

export const dummy49Relations = relations(dummy49, ({ many }) => ({
	children: many(children49),
}));

export const children49Relations = relations(children49, ({ one }) => ({
	parent: one(dummy49, {
		fields: [children49.parentId],
		references: [dummy49.id],
	}),
}));

export const dummy50Relations = relations(dummy50, ({ many }) => ({
	children: many(children50),
}));

export const children50Relations = relations(children50, ({ one }) => ({
	parent: one(dummy50, {
		fields: [children50.parentId],
		references: [dummy50.id],
	}),
}));

export const dummy51Relations = relations(dummy51, ({ many }) => ({
	children: many(children51),
}));

export const children51Relations = relations(children51, ({ one }) => ({
	parent: one(dummy51, {
		fields: [children51.parentId],
		references: [dummy51.id],
	}),
}));

export const dummy52Relations = relations(dummy52, ({ many }) => ({
	children: many(children52),
}));

export const children52Relations = relations(children52, ({ one }) => ({
	parent: one(dummy52, {
		fields: [children52.parentId],
		references: [dummy52.id],
	}),
}));

export const dummy53Relations = relations(dummy53, ({ many }) => ({
	children: many(children53),
}));

export const children53Relations = relations(children53, ({ one }) => ({
	parent: one(dummy53, {
		fields: [children53.parentId],
		references: [dummy53.id],
	}),
}));

export const dummy54Relations = relations(dummy54, ({ many }) => ({
	children: many(children54),
}));

export const children54Relations = relations(children54, ({ one }) => ({
	parent: one(dummy54, {
		fields: [children54.parentId],
		references: [dummy54.id],
	}),
}));

export const dummy55Relations = relations(dummy55, ({ many }) => ({
	children: many(children55),
}));

export const children55Relations = relations(children55, ({ one }) => ({
	parent: one(dummy55, {
		fields: [children55.parentId],
		references: [dummy55.id],
	}),
}));

export const dummy56Relations = relations(dummy56, ({ many }) => ({
	children: many(children56),
}));

export const children56Relations = relations(children56, ({ one }) => ({
	parent: one(dummy56, {
		fields: [children56.parentId],
		references: [dummy56.id],
	}),
}));

export const dummy57Relations = relations(dummy57, ({ many }) => ({
	children: many(children57),
}));

export const children57Relations = relations(children57, ({ one }) => ({
	parent: one(dummy57, {
		fields: [children57.parentId],
		references: [dummy57.id],
	}),
}));

export const dummy58Relations = relations(dummy58, ({ many }) => ({
	children: many(children58),
}));

export const children58Relations = relations(children58, ({ one }) => ({
	parent: one(dummy58, {
		fields: [children58.parentId],
		references: [dummy58.id],
	}),
}));

export const dummy59Relations = relations(dummy59, ({ many }) => ({
	children: many(children59),
}));

export const children59Relations = relations(children59, ({ one }) => ({
	parent: one(dummy59, {
		fields: [children59.parentId],
		references: [dummy59.id],
	}),
}));

export const dummy60Relations = relations(dummy60, ({ many }) => ({
	children: many(children60),
}));

export const children60Relations = relations(children60, ({ one }) => ({
	parent: one(dummy60, {
		fields: [children60.parentId],
		references: [dummy60.id],
	}),
}));

export const dummy61Relations = relations(dummy61, ({ many }) => ({
	children: many(children61),
}));

export const children61Relations = relations(children61, ({ one }) => ({
	parent: one(dummy61, {
		fields: [children61.parentId],
		references: [dummy61.id],
	}),
}));

export const dummy62Relations = relations(dummy62, ({ many }) => ({
	children: many(children62),
}));

export const children62Relations = relations(children62, ({ one }) => ({
	parent: one(dummy62, {
		fields: [children62.parentId],
		references: [dummy62.id],
	}),
}));

export const dummy63Relations = relations(dummy63, ({ many }) => ({
	children: many(children63),
}));

export const children63Relations = relations(children63, ({ one }) => ({
	parent: one(dummy63, {
		fields: [children63.parentId],
		references: [dummy63.id],
	}),
}));

export const dummy64Relations = relations(dummy64, ({ many }) => ({
	children: many(children64),
}));

export const children64Relations = relations(children64, ({ one }) => ({
	parent: one(dummy64, {
		fields: [children64.parentId],
		references: [dummy64.id],
	}),
}));

export const dummy65Relations = relations(dummy65, ({ many }) => ({
	children: many(children65),
}));

export const children65Relations = relations(children65, ({ one }) => ({
	parent: one(dummy65, {
		fields: [children65.parentId],
		references: [dummy65.id],
	}),
}));

export const dummy66Relations = relations(dummy66, ({ many }) => ({
	children: many(children66),
}));

export const children66Relations = relations(children66, ({ one }) => ({
	parent: one(dummy66, {
		fields: [children66.parentId],
		references: [dummy66.id],
	}),
}));

export const dummy67Relations = relations(dummy67, ({ many }) => ({
	children: many(children67),
}));

export const children67Relations = relations(children67, ({ one }) => ({
	parent: one(dummy67, {
		fields: [children67.parentId],
		references: [dummy67.id],
	}),
}));

export const dummy68Relations = relations(dummy68, ({ many }) => ({
	children: many(children68),
}));

export const children68Relations = relations(children68, ({ one }) => ({
	parent: one(dummy68, {
		fields: [children68.parentId],
		references: [dummy68.id],
	}),
}));

export const dummy69Relations = relations(dummy69, ({ many }) => ({
	children: many(children69),
}));

export const children69Relations = relations(children69, ({ one }) => ({
	parent: one(dummy69, {
		fields: [children69.parentId],
		references: [dummy69.id],
	}),
}));

export const dummy70Relations = relations(dummy70, ({ many }) => ({
	children: many(children70),
}));

export const children70Relations = relations(children70, ({ one }) => ({
	parent: one(dummy70, {
		fields: [children70.parentId],
		references: [dummy70.id],
	}),
}));

export const dummy71Relations = relations(dummy71, ({ many }) => ({
	children: many(children71),
}));

export const children71Relations = relations(children71, ({ one }) => ({
	parent: one(dummy71, {
		fields: [children71.parentId],
		references: [dummy71.id],
	}),
}));

export const dummy72Relations = relations(dummy72, ({ many }) => ({
	children: many(children72),
}));

export const children72Relations = relations(children72, ({ one }) => ({
	parent: one(dummy72, {
		fields: [children72.parentId],
		references: [dummy72.id],
	}),
}));

export const dummy73Relations = relations(dummy73, ({ many }) => ({
	children: many(children73),
}));

export const children73Relations = relations(children73, ({ one }) => ({
	parent: one(dummy73, {
		fields: [children73.parentId],
		references: [dummy73.id],
	}),
}));

export const dummy74Relations = relations(dummy74, ({ many }) => ({
	children: many(children74),
}));

export const children74Relations = relations(children74, ({ one }) => ({
	parent: one(dummy74, {
		fields: [children74.parentId],
		references: [dummy74.id],
	}),
}));

export const dummy75Relations = relations(dummy75, ({ many }) => ({
	children: many(children75),
}));

export const children75Relations = relations(children75, ({ one }) => ({
	parent: one(dummy75, {
		fields: [children75.parentId],
		references: [dummy75.id],
	}),
}));

export const dummy76Relations = relations(dummy76, ({ many }) => ({
	children: many(children76),
}));

export const children76Relations = relations(children76, ({ one }) => ({
	parent: one(dummy76, {
		fields: [children76.parentId],
		references: [dummy76.id],
	}),
}));

export const dummy77Relations = relations(dummy77, ({ many }) => ({
	children: many(children77),
}));

export const children77Relations = relations(children77, ({ one }) => ({
	parent: one(dummy77, {
		fields: [children77.parentId],
		references: [dummy77.id],
	}),
}));

export const dummy78Relations = relations(dummy78, ({ many }) => ({
	children: many(children78),
}));

export const children78Relations = relations(children78, ({ one }) => ({
	parent: one(dummy78, {
		fields: [children78.parentId],
		references: [dummy78.id],
	}),
}));

export const dummy79Relations = relations(dummy79, ({ many }) => ({
	children: many(children79),
}));

export const children79Relations = relations(children79, ({ one }) => ({
	parent: one(dummy79, {
		fields: [children79.parentId],
		references: [dummy79.id],
	}),
}));

export const dummy80Relations = relations(dummy80, ({ many }) => ({
	children: many(children80),
}));

export const children80Relations = relations(children80, ({ one }) => ({
	parent: one(dummy80, {
		fields: [children80.parentId],
		references: [dummy80.id],
	}),
}));

export const dummy81Relations = relations(dummy81, ({ many }) => ({
	children: many(children81),
}));

export const children81Relations = relations(children81, ({ one }) => ({
	parent: one(dummy81, {
		fields: [children81.parentId],
		references: [dummy81.id],
	}),
}));

export const dummy82Relations = relations(dummy82, ({ many }) => ({
	children: many(children82),
}));

export const children82Relations = relations(children82, ({ one }) => ({
	parent: one(dummy82, {
		fields: [children82.parentId],
		references: [dummy82.id],
	}),
}));

export const dummy83Relations = relations(dummy83, ({ many }) => ({
	children: many(children83),
}));

export const children83Relations = relations(children83, ({ one }) => ({
	parent: one(dummy83, {
		fields: [children83.parentId],
		references: [dummy83.id],
	}),
}));

export const dummy84Relations = relations(dummy84, ({ many }) => ({
	children: many(children84),
}));

export const children84Relations = relations(children84, ({ one }) => ({
	parent: one(dummy84, {
		fields: [children84.parentId],
		references: [dummy84.id],
	}),
}));

export const dummy85Relations = relations(dummy85, ({ many }) => ({
	children: many(children85),
}));

export const children85Relations = relations(children85, ({ one }) => ({
	parent: one(dummy85, {
		fields: [children85.parentId],
		references: [dummy85.id],
	}),
}));

export const dummy86Relations = relations(dummy86, ({ many }) => ({
	children: many(children86),
}));

export const children86Relations = relations(children86, ({ one }) => ({
	parent: one(dummy86, {
		fields: [children86.parentId],
		references: [dummy86.id],
	}),
}));

export const dummy87Relations = relations(dummy87, ({ many }) => ({
	children: many(children87),
}));

export const children87Relations = relations(children87, ({ one }) => ({
	parent: one(dummy87, {
		fields: [children87.parentId],
		references: [dummy87.id],
	}),
}));

export const dummy88Relations = relations(dummy88, ({ many }) => ({
	children: many(children88),
}));

export const children88Relations = relations(children88, ({ one }) => ({
	parent: one(dummy88, {
		fields: [children88.parentId],
		references: [dummy88.id],
	}),
}));

export const dummy89Relations = relations(dummy89, ({ many }) => ({
	children: many(children89),
}));

export const children89Relations = relations(children89, ({ one }) => ({
	parent: one(dummy89, {
		fields: [children89.parentId],
		references: [dummy89.id],
	}),
}));

export const dummy90Relations = relations(dummy90, ({ many }) => ({
	children: many(children90),
}));

export const children90Relations = relations(children90, ({ one }) => ({
	parent: one(dummy90, {
		fields: [children90.parentId],
		references: [dummy90.id],
	}),
}));

export const dummy91Relations = relations(dummy91, ({ many }) => ({
	children: many(children91),
}));

export const children91Relations = relations(children91, ({ one }) => ({
	parent: one(dummy91, {
		fields: [children91.parentId],
		references: [dummy91.id],
	}),
}));

export const dummy92Relations = relations(dummy92, ({ many }) => ({
	children: many(children92),
}));

export const children92Relations = relations(children92, ({ one }) => ({
	parent: one(dummy92, {
		fields: [children92.parentId],
		references: [dummy92.id],
	}),
}));

export const dummy93Relations = relations(dummy93, ({ many }) => ({
	children: many(children93),
}));

export const children93Relations = relations(children93, ({ one }) => ({
	parent: one(dummy93, {
		fields: [children93.parentId],
		references: [dummy93.id],
	}),
}));

export const dummy94Relations = relations(dummy94, ({ many }) => ({
	children: many(children94),
}));

export const children94Relations = relations(children94, ({ one }) => ({
	parent: one(dummy94, {
		fields: [children94.parentId],
		references: [dummy94.id],
	}),
}));

export const dummy95Relations = relations(dummy95, ({ many }) => ({
	children: many(children95),
}));

export const children95Relations = relations(children95, ({ one }) => ({
	parent: one(dummy95, {
		fields: [children95.parentId],
		references: [dummy95.id],
	}),
}));

export const dummy96Relations = relations(dummy96, ({ many }) => ({
	children: many(children96),
}));

export const children96Relations = relations(children96, ({ one }) => ({
	parent: one(dummy96, {
		fields: [children96.parentId],
		references: [dummy96.id],
	}),
}));

export const dummy97Relations = relations(dummy97, ({ many }) => ({
	children: many(children97),
}));

export const children97Relations = relations(children97, ({ one }) => ({
	parent: one(dummy97, {
		fields: [children97.parentId],
		references: [dummy97.id],
	}),
}));

export const dummy98Relations = relations(dummy98, ({ many }) => ({
	children: many(children98),
}));

export const children98Relations = relations(children98, ({ one }) => ({
	parent: one(dummy98, {
		fields: [children98.parentId],
		references: [dummy98.id],
	}),
}));

export const dummy99Relations = relations(dummy99, ({ many }) => ({
	children: many(children99),
}));

export const children99Relations = relations(children99, ({ one }) => ({
	parent: one(dummy99, {
		fields: [children99.parentId],
		references: [dummy99.id],
	}),
}));

export const dummy100Relations = relations(dummy100, ({ many }) => ({
	children: many(children100),
}));

export const children100Relations = relations(children100, ({ one }) => ({
	parent: one(dummy100, {
		fields: [children100.parentId],
		references: [dummy100.id],
	}),
}));
