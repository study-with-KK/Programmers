const solution = num => {
	let copy = num;
	let count = 0;

	if (num === 1) return 0;

	while (count !== 500) {
		if (copy === 1) break;

		if (copy % 2 === 0) {
			copy = copy / 2;

			count += 1;
		} else if (copy % 2) {
			copy = copy * 3 + 1;

			count += 1;
		}
	}

	return copy !== 1 ? -1 : count;
};

console.log(solution(1));
console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
