function solution(s) {
	const answer = [];

	for (let i = 0; i < s.length; i++) {
		const subStr = s.substring(0, i);

		console.log(subStr, s[i]);

		if (subStr.includes(s[i])) {
			answer.push(i - subStr.lastIndexOf(s[i]));
		} else {
			answer.push(-1);
		}
	}

	return answer;
}

console.log(solution('banana'));
console.log(solution('foobar'));
