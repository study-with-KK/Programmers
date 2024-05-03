function solution(friends, gifts) {
	const answer = Array.from({ length: friends.length }, () => 0);

	// 2x2 행렬 생성
	const table = Array.from({ length: friends.length }, () => Array.from({ length: friends.length }, () => 0));

	// gift를 순회하면서 table에 값 변경
	for (const gift of gifts) {
		const [g, r] = gift.split(' ');

		table[friends.indexOf(g)][friends.indexOf(r)] += 1;
	}

	const giftQuotient = [];

	// table을 순회하며 선물지수를 구하고
	for (let i = 0; i < table.length; i++) {
		let give = 0;
		let receive = 0;

		for (let j = 0; j < table.length; j++) {
			give += table[i][j];
			receive += table[j][i];
		}

		giftQuotient.push(give - receive);
	}

	for (let i = 0; i < table.length; i++) {
		for (let j = 0; j < table.length; j++) {
			if (i === j) continue;
			// console.log(table[i][j], table[j][i]);

			if (table[i][j] > table[j][i]) {
				answer[i] += 1;
			}

			if (table[i][j] === table[j][i] && giftQuotient[i] > giftQuotient[j]) {
				answer[i] += 1;
			}
		}
	}

	return Math.max(...answer);
}

console.log(
	solution(
		['muzi', 'ryan', 'frodo', 'neo'],
		['muzi frodo', 'muzi frodo', 'ryan muzi', 'ryan muzi', 'ryan muzi', 'frodo muzi', 'frodo ryan', 'neo muzi'],
	),
);
console.log(
	solution(
		['joy', 'brad', 'alessandro', 'conan', 'david'],
		['alessandro brad', 'alessandro joy', 'alessandro conan', 'david alessandro', 'alessandro david'],
	),
);
console.log(solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a']));
