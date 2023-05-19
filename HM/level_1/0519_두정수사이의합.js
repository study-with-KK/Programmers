const solution = (a, b) => {
	const arr = [];
	if (b > a) {
		for (let i = a; i <= b; i++) {
			arr.push(i);
		}
	} else {
		for (let i = b; i <= a; i++) {
			arr.push(i);
		}
	}

	return a === b ? a : arr.reduce((a, b) => a + b, 0);
};

const solution2 = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;

console.log(solution(3, 5));
