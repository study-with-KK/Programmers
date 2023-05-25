const solution = number => {
	let count = 0;
	const LENGTH = number.length;

	for (let i = 0; i < LENGTH; i++) {
		for (let j = i + 1; j < LENGTH; j++) {
			for (let k = j + 1; k < LENGTH; k++) {
				if (number[i] + number[j] + number[k] === 0) {
					count += 1;
				} else continue;
			}
		}
	}

	return count;
};

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
