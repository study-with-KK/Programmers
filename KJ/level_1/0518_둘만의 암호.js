function solution(s, skip, index) {
	const letters = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(letter => !skip.includes(letter));
	let answer = '';

	for (let i = 0; i < s.length; i++) {
		const newIdx = (letters.indexOf(s[i]) + index) % letters.length;

		answer += letters[newIdx];
	}

	return answer;
}

console.log(solution('aukks', 'wbqd', 5));
