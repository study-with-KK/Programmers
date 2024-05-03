function solution(s) {
	const answer = [];

	const set = s
		.replace(/^{{|}}$/g, '')
		.split('},{')
		.sort((a, b) => a.length - b.length);

	for (const num of set) {
		const temp = num.split(',');

		for (const elem of temp) {
			answer.push(+elem);
		}
	}

	return [...new Set(answer)];
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{123}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
