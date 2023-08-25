function solution(keymap, targets) {
	const answer = [];

	// targets를 순회
	for (const target of targets) {
		const minCount = [];

		// target(문자 한 개)를 순회
		for (let i = 0; i < target.length; i++) {
			const temp = [];

			// keymap을 순회
			for (const key of keymap) {
				const count = key.split('').indexOf(target[i]);

				if (count !== -1) temp.push(count + 1);
			}

			if (temp.length) {
				minCount.push(Math.min(...temp));
			} else {
				minCount.push(-1);
				break;
			}
			temp.length = 0;
		}

		if (minCount.includes(-1)) {
			answer.push(-1);
		} else {
			answer.push(minCount.reduce((acc, cur) => acc + cur, 0));
		}
		minCount.length = 0;
	}

	return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
console.log(solution(['AB', 'ABCDE'], ['A', 'FGHIJ']));
console.log(solution(['ABCE'], ['ABDE']));

// [ 9, 4 ]
// [ -1 ]
// [ 4, 6 ]
// [ 1, -1 ]
// [ -1 ]
