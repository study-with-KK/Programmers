const isValid = (today, targetDay, term) => {
	const temp = +today[0] * 12 * 28 + +today[1] * 28 + +today[2];
	const expirationDay = +targetDay[0] * 12 * 28 + (+targetDay[1] + term) * 28 + +targetDay[2];

	return temp - expirationDay >= 0;
};

function solution(today, terms, privacies) {
	const answer = [];

	const todayInfo = [...today.split('.')];
	const termInfo = {};
	terms.forEach(term => {
		const temp = term.split(' ');

		termInfo[temp[0]] = +temp[1];
	});

	for (let i = 0; i < privacies.length; i++) {
		const dayInfo = privacies[i].split(' ');
		const day = [...dayInfo[0].split('.')];
		const term = termInfo[dayInfo[1]];

		if (isValid(todayInfo, day, term)) answer.push(i + 1);
	}

	return answer;
}

console.log(
	solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']),
);

console.log(
	solution(
		'2020.01.01',
		['Z 3', 'D 5'],
		['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'],
	),
);
