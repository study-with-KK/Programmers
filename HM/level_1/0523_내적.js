const solution = (a, b) => {
	return a.map((num, idx) => num * b[idx]).reduce((a, b) => a + b);
};

const solution2 = (a, b) => {
	return a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);
};

console.log(solution2([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution2([-1, 0, 1], [1, 0, -1]));
