import { writeFileSync } from "fs";

// 100個のルート定義を生成
const generateRoutes = () => {
	const imports = `import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { db } from './db';
import { eq } from 'drizzle-orm';
import * as schema from './schema';

`;

	const routes = Array.from({ length: 100 }, (_, i) => {
		const tableName = `dummy${i + 1}`;
		return `  .get(
    '/${tableName}',
    zValidator('query', z.object({
      id: z.string().min(1),
      filter: z.string().optional(),
      limit: z.number().optional(),
    })),
    async (c) => {
      const { id } = c.req.valid('query');
      const result = await db.query.${tableName}.findFirst({
        where: eq(schema.${tableName}.id, id),
        with: {
          children: true,
        },
      });
      return c.json(result);
    }
  )`;
	}).join("\n");

	const content = `${imports}export const app = new Hono()\n${routes};\n\nexport type AppType = typeof app;\n`;

	writeFileSync("./src/app.ts", content);
	console.log("✅ Routes generated: 100 endpoints");
};

generateRoutes();
