// K : 최고점
// M : 사과 개수 / 상자
function solution(k, m, score) {
	const apples = score.sort((a, b) => b - a);

	return apples.filter((_, i) => (i + 1) % m === 0).reduce((acc, val) => acc + val * m, 0);
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
