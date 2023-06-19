function solution(numbers) {
	let answer = 0;

	for (let x = 0; x < numbers.length - 2; x++) {
		for (let y = x + 1; y < numbers.length - 1; y++) {
			for (let z = y + 1; z < numbers.length; z++) {
				if (numbers[x] + numbers[y] + numbers[z] === 0) {
					answer += 1;
				}
			}
		}
	}

	return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
