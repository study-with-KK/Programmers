function solution(s) {
	let answer = 0;
	const first = [];
	const diff = [];

	for (let i = 0; i < s.length; i++) {
		if (first.length === 0 || first.at(-1) === s[i]) {
			first.push(s[i]);
		} else {
			diff.push(s[i]);
		}

		if (first.length === diff.length) {
			answer += 1;
			first.length = 0;
			diff.length = 0;
		}
	}

	if (first.length !== 0) answer += 1;

	return answer;
}

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
