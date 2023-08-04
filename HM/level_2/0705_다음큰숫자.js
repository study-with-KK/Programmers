const solution = n => {
	let smallNum = n;

	// const countNumOfStrOne = str => [...str].filter(s => s === '1').length;
	const countNumOfStrOne = str => str.match(/1/g).length;

	while (1) {
		smallNum += 1;
		if (countNumOfStrOne(smallNum.toString(2)) === countNumOfStrOne(n.toString(2))) break;
	}

	return smallNum;
};

console.log(solution(78)); // 83
console.log(solution(15)); // 23
