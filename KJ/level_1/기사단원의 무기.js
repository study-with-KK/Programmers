function solution(number, limit, power) {
	let answer = 0;

	// 1~number를 순회하며
	for (let i = 1; i <= number; i++) {
		let tempPower = 0;

		// 약수의 개수를 구한다.
		for (let j = 1; j * j <= i; j++) {
			if (i % j === 0) {
				tempPower += j * j === i ? 1 : 2;
			}

			if (limit < tempPower) {
				tempPower = power;
				break;
			}
		}

		answer += tempPower;
	}

	return answer;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
