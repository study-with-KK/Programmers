const solution = numbers => {
	let plusTwoNumbers = [];

	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			const targetToPlus = numbers[i] + numbers[j];
			if (plusTwoNumbers.includes(targetToPlus)) continue;
			plusTwoNumbers = [...plusTwoNumbers, targetToPlus];
		}
	}

	return plusTwoNumbers.sort((a, b) => a - b);
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
