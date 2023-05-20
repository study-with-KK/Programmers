const solution = numbers => {
	const totalNumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	return totalNumList.filter(num => !numbers.includes(num)).reduce((prev, curr) => prev + curr, 0);
};
