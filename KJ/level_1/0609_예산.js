function solution(d, budget) {
	let count = 0;

	d.sort((a, b) => a - b).reduce((acc, cur) => {
		if (acc >= cur) {
			count += 1;
			return acc - cur;
		}
		return acc;
	}, budget);

	return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
