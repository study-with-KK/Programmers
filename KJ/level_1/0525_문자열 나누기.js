const stringSeperator = s => {
	const tempStr = s.split('');

	let same = 0;
	let diff = 0;
	let index = 0;

	for (let i = 1; i < tempStr.lenght; i++) {
		const firstChar = tempStr[0];

		if (firstChar === tempStr[i]) {
			same += 1;
		} else {
			diff += 1;
		}

		if (same === diff) {
			index = i + 1;
			break;
		}
	}

	return tempStr.slice(index).join('');
};

function solution(s) {
	stringSeperator(s);

	return stringSeperator(s);
}

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
