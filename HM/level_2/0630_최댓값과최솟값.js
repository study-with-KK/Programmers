const solution = s => {
	const _s = s
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);

	return [_s[0], _s[_s.length - 1]].join(' ');
};

const solution2 = s => {
	const numberArr = s.split(' ').map(Number);

	return [Math.max(...numberArr), Math.min(...numberArr)].join(' ');
};

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
