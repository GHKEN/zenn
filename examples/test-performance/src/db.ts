import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

// 環境変数でポートを切り替え可能に
const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3307;

const poolConnection = mysql.createPool({
	host: "localhost",
	port,
	user: "test",
	password: "test",
	database: "test",
});

export const db = drizzle(poolConnection, { schema, mode: "default" });
