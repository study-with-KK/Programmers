function solution(n, left, right) {
	const matrix = [];

	for (let i = left; i <= right; i += 1) {
		const row = Math.floor(i / n);
		const col = Math.floor(i % n);

		const temp = row <= col ? col + 1 : row + 1;

		matrix.push(temp);
	}

	return matrix;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
