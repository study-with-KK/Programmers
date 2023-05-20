const solution = (absolutes, signs) => {
	const calculation = value => (value ? 1 : -1);

	return absolutes.map((val, idx) => val * calculation(signs[idx])).reduce((prev, curr) => prev + curr, 0);
};

console.log(solution([4, 7, 12], [true, false, true]));
