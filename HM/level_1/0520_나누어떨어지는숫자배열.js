const solution = (arr, divisor) => {
	const elemBecomeZeroWithDivisor = arr.filter(elem => elem % divisor === 0);
	return elemBecomeZeroWithDivisor.length === 0 ? [-1] : elemBecomeZeroWithDivisor.sort((a, b) => a - b);
};
