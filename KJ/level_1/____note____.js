function solution(n) {
	const answer = [];

	for (let i = 0; i * i <= n; i++) {
		if (n % i === 0) {
			answer.push(i);

			if (i !== n / i) answer.push(n / i);
		}
	}

	return answer.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(12));
console.log(solution(5));
