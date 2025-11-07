import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";
import { db } from "./db";
import * as schema from "./schema";

export const app = new Hono()
	.get(
		"/dummy1",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy1.findFirst({
				where: eq(schema.dummy1.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy2",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy2.findFirst({
				where: eq(schema.dummy2.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy3",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy3.findFirst({
				where: eq(schema.dummy3.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy4",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy4.findFirst({
				where: eq(schema.dummy4.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy5",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy5.findFirst({
				where: eq(schema.dummy5.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy6",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy6.findFirst({
				where: eq(schema.dummy6.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy7",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy7.findFirst({
				where: eq(schema.dummy7.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy8",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy8.findFirst({
				where: eq(schema.dummy8.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy9",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy9.findFirst({
				where: eq(schema.dummy9.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy10",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy10.findFirst({
				where: eq(schema.dummy10.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy11",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy11.findFirst({
				where: eq(schema.dummy11.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy12",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy12.findFirst({
				where: eq(schema.dummy12.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy13",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy13.findFirst({
				where: eq(schema.dummy13.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy14",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy14.findFirst({
				where: eq(schema.dummy14.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy15",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy15.findFirst({
				where: eq(schema.dummy15.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy16",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy16.findFirst({
				where: eq(schema.dummy16.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy17",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy17.findFirst({
				where: eq(schema.dummy17.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy18",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy18.findFirst({
				where: eq(schema.dummy18.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy19",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy19.findFirst({
				where: eq(schema.dummy19.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy20",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy20.findFirst({
				where: eq(schema.dummy20.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy21",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy21.findFirst({
				where: eq(schema.dummy21.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy22",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy22.findFirst({
				where: eq(schema.dummy22.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy23",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy23.findFirst({
				where: eq(schema.dummy23.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy24",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy24.findFirst({
				where: eq(schema.dummy24.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy25",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy25.findFirst({
				where: eq(schema.dummy25.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy26",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy26.findFirst({
				where: eq(schema.dummy26.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy27",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy27.findFirst({
				where: eq(schema.dummy27.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy28",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy28.findFirst({
				where: eq(schema.dummy28.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy29",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy29.findFirst({
				where: eq(schema.dummy29.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy30",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy30.findFirst({
				where: eq(schema.dummy30.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy31",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy31.findFirst({
				where: eq(schema.dummy31.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy32",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy32.findFirst({
				where: eq(schema.dummy32.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy33",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy33.findFirst({
				where: eq(schema.dummy33.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy34",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy34.findFirst({
				where: eq(schema.dummy34.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy35",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy35.findFirst({
				where: eq(schema.dummy35.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy36",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy36.findFirst({
				where: eq(schema.dummy36.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy37",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy37.findFirst({
				where: eq(schema.dummy37.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy38",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy38.findFirst({
				where: eq(schema.dummy38.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy39",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy39.findFirst({
				where: eq(schema.dummy39.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy40",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy40.findFirst({
				where: eq(schema.dummy40.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy41",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy41.findFirst({
				where: eq(schema.dummy41.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy42",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy42.findFirst({
				where: eq(schema.dummy42.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy43",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy43.findFirst({
				where: eq(schema.dummy43.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy44",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy44.findFirst({
				where: eq(schema.dummy44.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy45",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy45.findFirst({
				where: eq(schema.dummy45.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy46",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy46.findFirst({
				where: eq(schema.dummy46.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy47",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy47.findFirst({
				where: eq(schema.dummy47.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy48",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy48.findFirst({
				where: eq(schema.dummy48.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy49",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy49.findFirst({
				where: eq(schema.dummy49.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy50",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy50.findFirst({
				where: eq(schema.dummy50.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy51",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy51.findFirst({
				where: eq(schema.dummy51.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy52",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy52.findFirst({
				where: eq(schema.dummy52.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy53",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy53.findFirst({
				where: eq(schema.dummy53.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy54",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy54.findFirst({
				where: eq(schema.dummy54.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy55",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy55.findFirst({
				where: eq(schema.dummy55.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy56",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy56.findFirst({
				where: eq(schema.dummy56.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy57",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy57.findFirst({
				where: eq(schema.dummy57.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy58",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy58.findFirst({
				where: eq(schema.dummy58.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy59",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy59.findFirst({
				where: eq(schema.dummy59.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy60",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy60.findFirst({
				where: eq(schema.dummy60.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy61",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy61.findFirst({
				where: eq(schema.dummy61.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy62",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy62.findFirst({
				where: eq(schema.dummy62.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy63",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy63.findFirst({
				where: eq(schema.dummy63.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy64",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy64.findFirst({
				where: eq(schema.dummy64.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy65",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy65.findFirst({
				where: eq(schema.dummy65.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy66",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy66.findFirst({
				where: eq(schema.dummy66.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy67",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy67.findFirst({
				where: eq(schema.dummy67.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy68",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy68.findFirst({
				where: eq(schema.dummy68.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy69",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy69.findFirst({
				where: eq(schema.dummy69.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy70",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy70.findFirst({
				where: eq(schema.dummy70.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy71",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy71.findFirst({
				where: eq(schema.dummy71.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy72",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy72.findFirst({
				where: eq(schema.dummy72.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy73",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy73.findFirst({
				where: eq(schema.dummy73.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy74",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy74.findFirst({
				where: eq(schema.dummy74.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy75",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy75.findFirst({
				where: eq(schema.dummy75.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy76",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy76.findFirst({
				where: eq(schema.dummy76.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy77",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy77.findFirst({
				where: eq(schema.dummy77.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy78",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy78.findFirst({
				where: eq(schema.dummy78.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy79",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy79.findFirst({
				where: eq(schema.dummy79.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy80",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy80.findFirst({
				where: eq(schema.dummy80.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy81",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy81.findFirst({
				where: eq(schema.dummy81.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy82",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy82.findFirst({
				where: eq(schema.dummy82.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy83",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy83.findFirst({
				where: eq(schema.dummy83.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy84",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy84.findFirst({
				where: eq(schema.dummy84.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy85",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy85.findFirst({
				where: eq(schema.dummy85.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy86",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy86.findFirst({
				where: eq(schema.dummy86.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy87",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy87.findFirst({
				where: eq(schema.dummy87.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy88",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy88.findFirst({
				where: eq(schema.dummy88.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy89",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy89.findFirst({
				where: eq(schema.dummy89.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy90",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy90.findFirst({
				where: eq(schema.dummy90.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy91",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy91.findFirst({
				where: eq(schema.dummy91.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy92",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy92.findFirst({
				where: eq(schema.dummy92.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy93",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy93.findFirst({
				where: eq(schema.dummy93.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy94",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy94.findFirst({
				where: eq(schema.dummy94.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy95",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy95.findFirst({
				where: eq(schema.dummy95.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy96",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy96.findFirst({
				where: eq(schema.dummy96.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy97",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy97.findFirst({
				where: eq(schema.dummy97.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy98",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy98.findFirst({
				where: eq(schema.dummy98.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy99",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy99.findFirst({
				where: eq(schema.dummy99.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	)
	.get(
		"/dummy100",
		zValidator(
			"query",
			z.object({
				id: z.string().min(1),
				filter: z.string().optional(),
				limit: z.number().optional(),
			}),
		),
		async (c) => {
			const { id } = c.req.valid("query");
			const result = await db.query.dummy100.findFirst({
				where: eq(schema.dummy100.id, id),
				with: {
					children: true,
				},
			});
			return c.json(result);
		},
	);

export type AppType = typeof app;
