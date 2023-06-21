// const solution = (k, m, score) => {
// 	const _score = [...score].sort((a, b) => b - a);

// 	let fruitBasket = [];

// 	for (let i = 0; i < Math.floor(score.length / m); i++) {
// 		fruitBasket = [...fruitBasket, _score.slice(i * m, m + i * m)];
// 	}

// 	let result = 0;
// 	fruitBasket.forEach(basket => (result += Math.min(...basket) * m * 1));
// 	return result;
// };

const solution = (k, m, score) => {
	const _score = [...score].sort((a, b) => b - a);

	let idx = m - 1;
	let result = 0;

	for (let i = 0; i < Math.floor(_score.length / m); i++) {
		if (_score[idx]) {
			result += _score[idx] * m;
			idx += m;
		}
	}

	return result;
};

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
