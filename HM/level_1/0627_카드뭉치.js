const solution = (cards1, cards2, goal) => {
	for (const str of goal) {
		if (cards1[0] === str) {
			cards1.shift();
		} else if (cards2[0] === str) {
			cards2.shift();
		} else {
			return 'No';
		}
	}
	return 'Yes';
};

const solution2 = (cards1, cards2, goal) => {
	let cards1Idx = 0;
	let cards2Idx = 0;

	for (let str of goal) {
		if (cards1[cards1Idx] === str) cards1Idx += 1;
		else if (cards2[cards2Idx] === str) cards2Idx += 1;
		else return 'No';
	}

	return 'Yes';
};

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // 'Yes'

console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])); // 'No'
