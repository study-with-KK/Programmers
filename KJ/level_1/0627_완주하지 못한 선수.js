function solution(participants, completions) {
	const table = {};

	for (const participant of participants) {
		if (table[participant]) {
			table[participant] += 1;
		} else {
			table[participant] = 1;
		}
	}

	for (const completion of completions) {
		table[completion] -= 1;
	}

	return Object.keys(table)
		.filter(key => table[key] > 0)
		.toString('');

	// participants.sort();
	// completion.sort();

	// for (let i = 0; i < participants.length; i++) {
	// 	if (participants[i] !== completion[i]) return participants[i];
	// }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
