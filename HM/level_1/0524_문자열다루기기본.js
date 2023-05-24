const solution = s => {
	const checkLength = s.length === 4 || s.length === 6;
	return checkLength && ![...s].map(str => Number(str)).includes(NaN);
};

const solution2 = s => {
	const regex = new RegExp(/^\d{6}$|^\d{4}$/);
	return regex.test(s);
};

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution2('a234'));
console.log(solution2('1234'));
