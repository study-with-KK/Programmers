function solution(n) {
	// 팩토리얼은 계산할때 수가 너무 커서 피보나치로...
	// n = 0, 1, 2일 때
	const records = [1, 1, 2];

	for (let i = 3; i <= n; i += 1) {
		const temp = (records[i - 2] + records[i - 1]) % 1234567;

		records.push(temp);
	}

	return records[n] % 1234567;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
