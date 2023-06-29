// 시간 초과 때문에 고생한 문제
const countDivisors = (num, nums) => {
	let divisor = 0;

	for (let i = 1; i <= num / 2; i++) {
		if (num % i === 0) divisor += 1;
	}
	// num divisor
	// 1 0
	// 2 1
	// 3 1
	// 4 2
	// 5 1
	return nums.push(divisor + 1);
};

const solution = (number, limit, power) => {
	const nums = [];

	for (let night = 1; night <= number; night++) {
		countDivisors(night, nums);
	}

	return nums.map(num => (num > limit ? power : num)).reduce((pre, cur) => pre + cur, 0);
};

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
