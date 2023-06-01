function solution(A, B) {
	const newA = A.sort((a, b) => a - b);
	const newB = B.sort((a, b) => b - a);

	return newA.reduce((acc, _, i) => acc + newA[i] * newB[i], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
