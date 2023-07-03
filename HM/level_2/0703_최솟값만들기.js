const solution = (A, B) => {
	const _A = A.sort((a, b) => a - b);
	const _B = B.sort((a, b) => b - a);

	return _A.reduce((acc, cur, idx) => acc + cur * _B[idx], 0);
};

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
