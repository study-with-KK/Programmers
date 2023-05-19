const generateFibonacci = n => {
	if (n === 0) return 0;
	if (n === 1) return 1;

	return generateFibonacci(n - 2) + generateFibonacci(n - 1);
};
