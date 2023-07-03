const solution = s => {
	let _s = s;
	const process = [];
	let count = 0;

	while (_s !== '1') {
		const originLength = _s.length;

		_s = _s.replace(/0/g, '');
		const transformLength = _s.length;
		count += 1;

		process.push({ removeCount: originLength - transformLength, length: transformLength });

		_s = transformLength.toString(2);
	}

	return [count, process.reduce((acc, cur) => acc + cur.removeCount, 0)];
};

const solution2 = s => {
	let _s = s;
	const count = [0, 0];

	while (_s.length > 1) {
		count[0] += 1;
		count[1] += (_s.match(/0/g) || []).length;
		_s = _s.replace(/0/g, '').length.toString(2);
	}

	return count;
};

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));

console.log(solution2('1111111'));
