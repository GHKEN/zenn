import { exec } from "child_process";
import { existsSync, rmSync } from "fs";
import { promisify } from "util";

const execAsync = promisify(exec);

// 動的型推論のパターンでビルド時間を計測
const measureDynamic = async () => {
	console.log("📊 Measuring build time with dynamic type inference...");
	console.log("⏱️  Running 3 measurements and calculating average...\n");

	const times: number[] = [];

	for (let i = 1; i <= 3; i++) {
		// キャッシュをクリア
		if (existsSync(".tsbuildinfo")) {
			rmSync(".tsbuildinfo");
		}

		console.log(`Run ${i}/3...`);
		const startTime = performance.now();

		try {
			await execAsync(
				"tsc --noEmit --incremental false --project tsconfig.measure.json",
			);
			const endTime = performance.now();
			const buildTime = (endTime - startTime) / 1000;
			times.push(buildTime);
			console.log(`  Completed in ${buildTime.toFixed(2)}s\n`);
			// biome-ignore lint/suspicious/noExplicitAny: ignore
		} catch (error: any) {
			console.error("❌ Build failed:", error.message);
			process.exit(1);
		}
	}

	const average = times.reduce((a, b) => a + b, 0) / times.length;
	const min = Math.min(...times);
	const max = Math.max(...times);

	console.log(`\n📊 Results:`);
	console.log(`   Average: ${average.toFixed(2)}s`);
	console.log(`   Min: ${min.toFixed(2)}s`);
	console.log(`   Max: ${max.toFixed(2)}s`);
	console.log(`\n📈 Dynamic type inference: ${average.toFixed(2)}s`);

	return average;
};

measureDynamic();
