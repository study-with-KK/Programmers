function solution(x, n) {
	return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
