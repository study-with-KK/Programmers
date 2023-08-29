function solution(n, m, section) {
	let count = 0;
	let currentRange = 0;

	for (const unpainted of section) {
		if (currentRange < unpainted) {
			currentRange = unpainted - 1 + m;
			count += 1;
		}
	}

	return count;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
