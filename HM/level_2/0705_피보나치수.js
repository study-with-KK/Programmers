const solution = n => {
	const MOD = 1234567;
	const arr = [0, 1];

	for (let i = 2; i <= n; i++) {
		arr[i] = (arr[i - 2] + arr[i - 1]) % MOD;
	}

	return arr[n] % MOD;
};

console.log(solution(3)); // 2
console.log(solution(5)); //5
