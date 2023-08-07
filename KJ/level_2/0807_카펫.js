/**
 * brown : 최소 8개
 * yellow : 최소 1개
 * width >= height
 */

function solution(brown, yellow) {
	const answer = [];

	// 카펫 넓이
	const mul = brown + yellow;

	// 카펫의 가로+세로
	const sum = (brown + 4) / 2;

	for (let x = sum; x >= 0; x -= 1) {
		if (x ** 2 - sum * x + mul === 0) answer.push(x);
	}

	if (answer.length === 1) answer.push(answer[0]);

	return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
