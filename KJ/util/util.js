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

// 약수의 개수
const numberOfDividors = num => {
	let count = 0;
	const length = Math.sqrt(num);

	for (let i = 1; i <= length; i++) {
		if (num % i === 0) {
			count += i !== length ? 2 : 1;
		}
	}

	return count;
};
