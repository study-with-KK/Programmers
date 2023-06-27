const isPrime = n => {
	if (n === 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
};

// 에라토스테네스의 체 -> 시간 초과
const solution = n => {
	const s = new Set();

	for (let i = 2; i <= n; i++) {
		s.add(i);
	}

	for (let j = 2; j < Math.sqrt(n); j++) {
		if (s.has(j)) {
			for (let k = j * 2; k <= n; k += j) {
				s.delete(k);
			}
		}
	}

	return s.size;
};

const filterSolution = n => {
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

	return numbers.filter(n => n).length;
};

console.log(solution(10)); // 4
console.log(solution(5)); // 3

console.log(filterSolution(10)); // 3
console.log(filterSolution(5)); // 3
