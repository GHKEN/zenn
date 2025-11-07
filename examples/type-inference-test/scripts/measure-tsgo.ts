import { $ } from "bun";

async function measureTsgo() {
	const times: number[] = [];

	for (let i = 0; i < 3; i++) {
		console.log(`\nRun ${i + 1}/3...`);

		const start = performance.now();
		await $`bun tsgo --noEmit --incremental false --skipLibCheck src/app.ts`;
		const end = performance.now();

		const time = (end - start) / 1000;
		times.push(time);
		console.log(`Time: ${time.toFixed(2)}s`);
	}

	const avg = times.reduce((a, b) => a + b, 0) / times.length;
	console.log(`\nAverage: ${avg.toFixed(2)}s`);
	console.log(
		`Individual times: ${times.map((t) => t.toFixed(2)).join(", ")}s`,
	);
}

measureTsgo();
