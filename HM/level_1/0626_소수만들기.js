const isPrime = n => {
	if (n === 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}

	return true;
};

const solution = nums => {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (isPrime(nums[i] + nums[j] + nums[k])) {
					count += 1;
				}
			}
		}
	}

	return count;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
