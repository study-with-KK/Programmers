function solution(n, words) {
	const answers = [];
	let num = 0;
	let order = 0;

	for (let i = 0; i < words.length; i++) {
		if ((i >= 1 && i < words.length && words[i - 1].at(-1) !== words[i][0]) || answers.includes(words[i])) {
			num = (i % n) + 1;
			order = Math.floor(i / n) + 1;

			break;
		}

		answers.push(words[i]);
	}

	return [num, order];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
console.log(
	solution(5, [
		'hello',
		'observe',
		'effect',
		'take',
		'either',
		'recognize',
		'encourage',
		'ensure',
		'establish',
		'hang',
		'gather',
		'refer',
		'reference',
		'estimate',
		'executive',
	]),
);
