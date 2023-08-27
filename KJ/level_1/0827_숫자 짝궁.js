function solution(X, Y) {
	const numberX = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
	};

	const commonNumbers = [];

	for (let i = 0; i < X.length; i++) {
		numberX[X[i]] += 1;
	}

	for (let i = 0; i < Y.length; i++) {
		if (numberX[Y[i]] > 0) {
			numberX[Y[i]] -= 1;
			commonNumbers.push(Y[i]);
		}
	}

	const answer = commonNumbers
		.sort((a, b) => b - a)
		.join('')
		.replace(/^(0)+/, '0');

	return answer.length === 0 ? '-1' : answer;
}

// console.log(solution('100', '2345'));
// console.log(solution('100', '203045'));
// console.log(solution('100', '123450'));
// console.log(solution('12321', '42531'));
// console.log(solution('5525', '1255'));
console.log(solution('1002', '30005'));
