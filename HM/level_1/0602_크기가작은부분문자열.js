const solution = (t, p) => {
	const lengthOfP = p.length;

	const slicedStrArr = [...t].map((_, idx) => t.slice(idx, idx + lengthOfP)).filter(str => str.length >= lengthOfP);

	return slicedStrArr.filter(str => Number(str) <= Number(p)).length;
};

console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
console.log(solution('10203', '15'));
