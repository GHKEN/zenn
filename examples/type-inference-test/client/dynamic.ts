import { hc } from "hono/client";
import type { AppType } from "../src/app";

// 動的型推論を使用するクライアントコード
const client = hc<AppType>("http://localhost:3000");

// 複数のエンドポイントを使用（型推論を発動させる）
export const testDynamic = async () => {
	const res1 = await client.dummy1.$get({ query: { id: "1" } });
	const res25 = await client.dummy25.$get({ query: { id: "25" } });
	const res50 = await client.dummy50.$get({ query: { id: "50" } });
	const res75 = await client.dummy75.$get({ query: { id: "75" } });
	const res100 = await client.dummy100.$get({ query: { id: "100" } });

	return [res1, res25, res50, res75, res100];
};
