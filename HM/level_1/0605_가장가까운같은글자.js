// 다시 풀어보기

const solution = s => {
	let targetIsProcessed = [];
	let result = [];

	[...s].forEach((string, idx) => {
		if (!targetIsProcessed.includes(string)) {
			result = [...result, -1];
			targetIsProcessed = [...targetIsProcessed, string];
			return;
		}

		const positions = [...s].map((str, idx) => (str === string ? idx : null));

		result = [
			...result,
			idx -
				(positions.some(position => !position)
					? targetIsProcessed.lastIndexOf(string)
					: targetIsProcessed.indexOf(string)),
		];

		targetIsProcessed = [...targetIsProcessed, string];
	});

	return result;
};

console.log(solution('banana'));
console.log(solution('foobar'));
