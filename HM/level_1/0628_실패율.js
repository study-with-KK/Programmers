const solution = (N, stages) => {
	const _stages = [];
	const failureRate = [];
	let totalLength = stages.length;

	for (let i = 1; i <= N; i++) {
		const findStage = stages.filter(stage => stage === i).length;
		_stages.push(findStage);

		// 8 7 4 2 1
		const DELTA = i === 1 ? stages.length : (totalLength -= _stages[i - 2]);
		failureRate.push(findStage / DELTA);
	}

	return failureRate
		.map((rate, idx) => ({ id: idx + 1, rate }))
		.sort((a, b) => b.rate - a.rate)
		.map(item => item.id);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
