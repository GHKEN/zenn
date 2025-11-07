import { $ } from "bun";

type TestResult = {
	name: string;
	runner: string;
	cleanup: string;
	tmpfs: boolean;
	time: number;
};

async function cleanDatabase(port: number) {
	// 全テーブルをTRUNCATE
	console.log(`   Cleaning database on port ${port}...`);
	for (let i = 1; i <= 100; i++) {
		try {
			await $`mysql -h 127.0.0.1 -P ${port} -utest -ptest test -e "TRUNCATE TABLE dummy${i}"`.quiet();
			await $`mysql -h 127.0.0.1 -P ${port} -utest -ptest test -e "TRUNCATE TABLE children${i}"`.quiet();
		} catch (e) {
			// エラーは無視（テーブルが空の場合など）
		}
	}
}

async function measureTest(
	name: string,
	runner: string,
	cleanup: string,
	tmpfs: boolean,
): Promise<TestResult> {
	console.log(`\n📊 Testing: ${name}`);
	console.log(`   Runner: ${runner}, Cleanup: ${cleanup}, tmpfs: ${tmpfs}`);

	// テスト前にDBをクリーンアップ
	const port = tmpfs ? 3308 : 3307;
	await cleanDatabase(port);

	const testFile =
		runner === "bun"
			? `tests/bun-${cleanup}.test.ts`
			: `tests/vitest-${cleanup}.test.ts`;

	const start = performance.now();

	// 環境変数でポートを指定
	const env = { ...process.env, DB_PORT: port.toString() };

	if (runner === "bun") {
		await $`bun test ${testFile}`.env(env).quiet();
	} else {
		await $`vitest run ${testFile}`.env(env).quiet();
	}

	const end = performance.now();
	const time = (end - start) / 1000;

	console.log(`   ✅ Completed in ${time.toFixed(2)}s`);

	return {
		name,
		runner,
		cleanup,
		tmpfs,
		time,
	};
}

async function main() {
	console.log("🚀 Starting test performance benchmark\n");
	console.log("Testing patterns:");
	console.log("- Test runners: bun:test, vitest");
	console.log("- Cleanup methods: truncate, transaction");
	console.log("- Storage: normal disk, tmpfs");
	console.log("");

	const results: TestResult[] = [];

	// Bun + truncate (normal)
	results.push(
		await measureTest("Bun + TRUNCATE (normal)", "bun", "truncate", false),
	);

	// Bun + transaction (normal)
	results.push(
		await measureTest(
			"Bun + Transaction (normal)",
			"bun",
			"transaction",
			false,
		),
	);

	// Vitest + truncate (normal)
	results.push(
		await measureTest(
			"Vitest + TRUNCATE (normal)",
			"vitest",
			"truncate",
			false,
		),
	);

	// Vitest + transaction (normal)
	results.push(
		await measureTest(
			"Vitest + Transaction (normal)",
			"vitest",
			"transaction",
			false,
		),
	);

	// tmpfsバージョンも同様に測定
	console.log("\n\n🔄 Switching to tmpfs database...\n");

	// Bun + truncate (tmpfs)
	results.push(
		await measureTest("Bun + TRUNCATE (tmpfs)", "bun", "truncate", true),
	);

	// Bun + transaction (tmpfs)
	results.push(
		await measureTest("Bun + Transaction (tmpfs)", "bun", "transaction", true),
	);

	// 結果表示
	console.log("\n\n📈 Results Summary\n");
	console.log("┌─────────────────────────────────────┬────────────┐");
	console.log("│ Pattern                             │ Time (s)   │");
	console.log("├─────────────────────────────────────┼────────────┤");

	results.forEach((result) => {
		const storage = result.tmpfs ? " (tmpfs)" : " (normal)";
		const pattern = `${result.runner} + ${result.cleanup}${storage}`.padEnd(35);
		const time = result.time.toFixed(2).padStart(10);
		console.log(`│ ${pattern} │ ${time} │`);
	});

	console.log("└─────────────────────────────────────┴────────────┘");

	// 最速と最遅の比較
	const fastest = results.reduce((a, b) => (a.time < b.time ? a : b));
	const slowest = results.reduce((a, b) => (a.time > b.time ? a : b));
	const improvement = (slowest.time / fastest.time).toFixed(2);

	console.log(`\n🏆 Fastest: ${fastest.name} (${fastest.time.toFixed(2)}s)`);
	console.log(`🐌 Slowest: ${slowest.name} (${slowest.time.toFixed(2)}s)`);
	console.log(`📊 Improvement: ${improvement}x faster`);
}

main();
