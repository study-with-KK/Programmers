const solution = (brown, yellow) => {
	const sum = brown + yellow;
	const grid = [];

	// sum = brown + yellow === w x h;
	// yellow area = (w - 2) * (h - 2)
	// brown area = sum - yellow area

	for (let width = sum - 1; width > 0; width--) {
		if (sum % width !== 0) continue;

		const height = sum / width;
		const yellowArea = (width - 2) * (height - 2);
		const brownArea = sum - yellowArea;

		if (yellowArea === yellow && brownArea === brown) {
			grid[0] = width;
			grid[1] = height;
			break;
		}
	}

	return grid;
};

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
