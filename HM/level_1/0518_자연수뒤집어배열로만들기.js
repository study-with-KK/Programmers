function solution(n) {
	return [...(n + '')].reverse().map(Number);
}

console.log(solution(12345));
