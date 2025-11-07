import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

// tscで型定義ファイルを生成
const generateTypes = async () => {
	console.log("🔄 Generating type definitions with tsc...");

	try {
		const { stdout, stderr } = await execAsync("tsc --project tsconfig.json");

		if (stderr) {
			console.error("⚠️ TypeScript warnings:", stderr);
		}

		console.log("✅ Type definitions generated in ./dist");
		console.log(stdout);
		// biome-ignore lint/suspicious/noExplicitAny: ignore
	} catch (error: any) {
		console.error("❌ Failed to generate types:", error.message);
		process.exit(1);
	}
};

generateTypes();
