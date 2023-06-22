// 에라토스테네스의 체
const getPrimeNumbers = n => {
	const numbers = Array(n + 1)
		.fill(true)
		.fill(false, 0, 2);

	for (let i = 2; i * i <= n; i++) {
		if (numbers[i]) {
			for (let j = i * i; j <= n; j += i) {
				numbers[j] = false;
			}
		}
	}

	return numbers.map((v, i) => (v ? i : 0)).filter(n => n);
};

function solution(nums) {
	let answer = 0;

	const newNums = nums.sort((a, b) => b - a);

	const primeNumbers = getPrimeNumbers(newNums[0] + newNums[1] + newNums[2]);

	for (let i = 0; i < newNums.length - 2; i++) {
		for (let j = i + 1; j < newNums.length - 1; j++) {
			for (let k = j + 1; k < newNums.length; k++) {
				if (primeNumbers.includes(newNums[i] + newNums[j] + newNums[k])) answer += 1;
			}
		}
	}

	return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
