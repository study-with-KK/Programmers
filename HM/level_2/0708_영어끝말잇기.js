const solution = (n, words) => {
	const _words = [];
	let result = [0, 0];

	for (let i = 0; i < words.length; i++) {
		const currentWord = words[i];
		const prevWord = _words[i - 1];

		if (i === 0) {
			_words.push(words[0]);
		} else if (i > 0) {
			_words.push(currentWord);
			if (prevWord[prevWord.length - 1] === currentWord[0]) {
				if (_words.filter(word => word === currentWord).length === 2) {
					result = [(i % n) + 1, Math.ceil((i + 1) / n)];
				} else {
					result = [0, 0];
				}
				// continue;
			} else {
				result = [(i % n) + 1, Math.ceil((i + 1) / n)];
				break;
			}
		}
	}

	return result;
};

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])); // [3,3]
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
); // [0,0]
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])); // [1,3]
