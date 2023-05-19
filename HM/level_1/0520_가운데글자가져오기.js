const solution = s => {
	const length = s.length;
	const lengthDividedBy2 = length / 2;

	return length % 2 === 0 ? s[lengthDividedBy2 - 1] + s[lengthDividedBy2] : s[Math.floor(lengthDividedBy2)];
};

console.log(solution('abcde'));
console.log(solution('qwer'));
