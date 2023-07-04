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

const cases = [];

const permutation = (arr, start, end) => {
	if (start === end) {
		for (const it of arr) {
			cases.push(it);
		}
	} else {
		for (let i = start; i <= end; i++) {
			[arr[start], arr[i]] = [arr[i], arr[start]];
			permutation(arr, start + 1, end);
			[arr[start], arr[i]] = [arr[i], arr[start]];
		}
	}
};

function solution(numbers) {
	const primeNumbers = getPrimeNumbers(
		+numbers
			.split('')
			.sort((a, b) => b - a)
			.join(''),
	);

	permutation(numbers.split(''), 0, numbers.length);

	console.log(cases);
}

console.log(solution('17'));
console.log(solution('011'));
