const createStrangeString = s =>
	s
		.split('')
		.map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
		.join('');

function solution(s) {
	const strList = s.split(' ').map(str => createStrangeString(str));

	return strList.join(' ');
}

console.log(solution('try hello world'));
