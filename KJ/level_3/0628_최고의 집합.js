function solution(n, s) {
	const answer = [];

	let sum = s;
	let num = Math.floor(sum / n);

	if (num < 1) return [-1];

	for (let i = 0; i < n; i++) {
		answer.push(num);

		sum -= num;

		num = Math.floor(sum / (n - (i + 1)));
	}

	return answer;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
console.log(solution(3, 20)); // 6 6 8  6 7 7
