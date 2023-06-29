function solution(clothes) {
	const table = {};

	for (const item of clothes) {
		if (table[item[1]]) {
			table[item[1]] += 1;
		} else {
			table[item[1]] = 1;
		}
	}

	return Object.keys(table).reduce((acc, cur) => acc * (table[cur] + 1), 1) - 1;
}

console.log(
	solution([
		['yellow_hat', 'headgear'],
		['blue_sunglasses', 'eyewear'],
		['green_turban', 'headgear'],
	]),
);
console.log(
	solution([
		['crow_mask', 'face'],
		['blue_sunglasses', 'face'],
		['smoky_makeup', 'face'],
	]),
);
