function solution(n) {
	const mod = 1234567;
	const fibonacci = [0, 1];

	for (let i = 2; i <= n; i++) {
		const temp = (fibonacci[i - 2] + fibonacci[i - 1]) % mod;

		fibonacci.push(temp);
	}

	return fibonacci[n];
}

console.log(solution(3));
console.log(solution(5));
