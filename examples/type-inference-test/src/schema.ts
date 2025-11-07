import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const dummy1 = pgTable("dummy1", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy2 = pgTable("dummy2", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy3 = pgTable("dummy3", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy4 = pgTable("dummy4", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy5 = pgTable("dummy5", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy6 = pgTable("dummy6", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy7 = pgTable("dummy7", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy8 = pgTable("dummy8", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy9 = pgTable("dummy9", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy10 = pgTable("dummy10", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy11 = pgTable("dummy11", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy12 = pgTable("dummy12", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy13 = pgTable("dummy13", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy14 = pgTable("dummy14", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy15 = pgTable("dummy15", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy16 = pgTable("dummy16", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy17 = pgTable("dummy17", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy18 = pgTable("dummy18", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy19 = pgTable("dummy19", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy20 = pgTable("dummy20", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy21 = pgTable("dummy21", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy22 = pgTable("dummy22", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy23 = pgTable("dummy23", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy24 = pgTable("dummy24", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy25 = pgTable("dummy25", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy26 = pgTable("dummy26", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy27 = pgTable("dummy27", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy28 = pgTable("dummy28", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy29 = pgTable("dummy29", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy30 = pgTable("dummy30", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy31 = pgTable("dummy31", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy32 = pgTable("dummy32", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy33 = pgTable("dummy33", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy34 = pgTable("dummy34", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy35 = pgTable("dummy35", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy36 = pgTable("dummy36", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy37 = pgTable("dummy37", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy38 = pgTable("dummy38", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy39 = pgTable("dummy39", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy40 = pgTable("dummy40", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy41 = pgTable("dummy41", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy42 = pgTable("dummy42", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy43 = pgTable("dummy43", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy44 = pgTable("dummy44", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy45 = pgTable("dummy45", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy46 = pgTable("dummy46", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy47 = pgTable("dummy47", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy48 = pgTable("dummy48", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy49 = pgTable("dummy49", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy50 = pgTable("dummy50", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy51 = pgTable("dummy51", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy52 = pgTable("dummy52", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy53 = pgTable("dummy53", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy54 = pgTable("dummy54", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy55 = pgTable("dummy55", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy56 = pgTable("dummy56", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy57 = pgTable("dummy57", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy58 = pgTable("dummy58", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy59 = pgTable("dummy59", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy60 = pgTable("dummy60", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy61 = pgTable("dummy61", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy62 = pgTable("dummy62", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy63 = pgTable("dummy63", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy64 = pgTable("dummy64", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy65 = pgTable("dummy65", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy66 = pgTable("dummy66", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy67 = pgTable("dummy67", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy68 = pgTable("dummy68", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy69 = pgTable("dummy69", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy70 = pgTable("dummy70", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy71 = pgTable("dummy71", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy72 = pgTable("dummy72", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy73 = pgTable("dummy73", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy74 = pgTable("dummy74", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy75 = pgTable("dummy75", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy76 = pgTable("dummy76", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy77 = pgTable("dummy77", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy78 = pgTable("dummy78", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy79 = pgTable("dummy79", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy80 = pgTable("dummy80", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy81 = pgTable("dummy81", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy82 = pgTable("dummy82", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy83 = pgTable("dummy83", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy84 = pgTable("dummy84", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy85 = pgTable("dummy85", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy86 = pgTable("dummy86", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy87 = pgTable("dummy87", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy88 = pgTable("dummy88", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy89 = pgTable("dummy89", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy90 = pgTable("dummy90", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy91 = pgTable("dummy91", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy92 = pgTable("dummy92", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy93 = pgTable("dummy93", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy94 = pgTable("dummy94", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy95 = pgTable("dummy95", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy96 = pgTable("dummy96", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy97 = pgTable("dummy97", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy98 = pgTable("dummy98", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy99 = pgTable("dummy99", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const dummy100 = pgTable("dummy100", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	value: integer("value").notNull(),
	description: text("description"),
	status: text("status").notNull(),
	metadata: text("metadata"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const children1 = pgTable("children1", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children2 = pgTable("children2", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children3 = pgTable("children3", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children4 = pgTable("children4", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children5 = pgTable("children5", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children6 = pgTable("children6", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children7 = pgTable("children7", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children8 = pgTable("children8", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children9 = pgTable("children9", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children10 = pgTable("children10", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children11 = pgTable("children11", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children12 = pgTable("children12", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children13 = pgTable("children13", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children14 = pgTable("children14", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children15 = pgTable("children15", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children16 = pgTable("children16", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children17 = pgTable("children17", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children18 = pgTable("children18", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children19 = pgTable("children19", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children20 = pgTable("children20", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children21 = pgTable("children21", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children22 = pgTable("children22", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children23 = pgTable("children23", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children24 = pgTable("children24", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children25 = pgTable("children25", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children26 = pgTable("children26", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children27 = pgTable("children27", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children28 = pgTable("children28", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children29 = pgTable("children29", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children30 = pgTable("children30", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children31 = pgTable("children31", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children32 = pgTable("children32", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children33 = pgTable("children33", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children34 = pgTable("children34", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children35 = pgTable("children35", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children36 = pgTable("children36", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children37 = pgTable("children37", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children38 = pgTable("children38", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children39 = pgTable("children39", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children40 = pgTable("children40", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children41 = pgTable("children41", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children42 = pgTable("children42", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children43 = pgTable("children43", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children44 = pgTable("children44", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children45 = pgTable("children45", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children46 = pgTable("children46", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children47 = pgTable("children47", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children48 = pgTable("children48", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children49 = pgTable("children49", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children50 = pgTable("children50", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children51 = pgTable("children51", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children52 = pgTable("children52", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children53 = pgTable("children53", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children54 = pgTable("children54", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children55 = pgTable("children55", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children56 = pgTable("children56", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children57 = pgTable("children57", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children58 = pgTable("children58", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children59 = pgTable("children59", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children60 = pgTable("children60", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children61 = pgTable("children61", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children62 = pgTable("children62", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children63 = pgTable("children63", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children64 = pgTable("children64", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children65 = pgTable("children65", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children66 = pgTable("children66", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children67 = pgTable("children67", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children68 = pgTable("children68", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children69 = pgTable("children69", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children70 = pgTable("children70", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children71 = pgTable("children71", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children72 = pgTable("children72", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children73 = pgTable("children73", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children74 = pgTable("children74", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children75 = pgTable("children75", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children76 = pgTable("children76", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children77 = pgTable("children77", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children78 = pgTable("children78", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children79 = pgTable("children79", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children80 = pgTable("children80", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children81 = pgTable("children81", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children82 = pgTable("children82", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children83 = pgTable("children83", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children84 = pgTable("children84", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children85 = pgTable("children85", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children86 = pgTable("children86", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children87 = pgTable("children87", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children88 = pgTable("children88", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children89 = pgTable("children89", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children90 = pgTable("children90", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children91 = pgTable("children91", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children92 = pgTable("children92", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children93 = pgTable("children93", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children94 = pgTable("children94", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children95 = pgTable("children95", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children96 = pgTable("children96", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children97 = pgTable("children97", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children98 = pgTable("children98", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children99 = pgTable("children99", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const children100 = pgTable("children100", {
	id: text("id").primaryKey(),
	parentId: text("parent_id").notNull(),
	title: text("title").notNull(),
	content: text("content"),
	order: integer("order").notNull(),
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
