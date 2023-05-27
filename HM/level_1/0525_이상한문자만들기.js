const solution = s => {
	return s
		.split(' ')
		.map(str =>
			[...str]
				.map((val, idx) => {
					const strArr = [];
					idx % 2 === 0 ? strArr.push(val.toUpperCase()) : strArr.push(val.toLowerCase());
					return strArr;
				})
				.join(''),
		)
		.join(' ');
};

// 기존 val이라는 매개변수에 재할당을 하는 것이기 때문에 지양
const solution2 = s => {
	return s
		.split(' ')
		.map(str => [...str].map((val, idx) => (val = idx % 2 === 0 ? val.toUpperCase() : val.toLowerCase())).join(''))
		.join(' ');
};

console.log(solution('try hello world'));
