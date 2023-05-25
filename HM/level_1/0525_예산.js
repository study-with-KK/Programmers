const solution = (d, budget) => {
	const sortedArr = [...d].sort((a, b) => a - b);

	while (sortedArr.reduce((prev, curr) => prev + curr, 0) - budget > 0) {
		sortedArr.pop();
	}

	return sortedArr.length;
};

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
