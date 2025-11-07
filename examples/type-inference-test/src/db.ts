import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

// ダミーのDB接続（実際には使わない）
// biome-ignore lint/suspicious/noExplicitAny: 型定義生成用のダミー
export const db = drizzle({} as any, { schema });
