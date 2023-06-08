const getTrimmedNum = ({ part = 'front', placementOfFoods = [] }) =>
	part === 'front' ? placementOfFoods.join('').trim() : placementOfFoods.reverse().join('').trim();

const solution1 = food => {
	const NUM_OF_WATER = '0';

	const placementOfFoods = food.map((val, foodNum) =>
		Math.floor(val / 2) === 0 ? '' : Array.from({ length: Math.floor(val / 2) }, (_, idx) => foodNum).join(''),
	);

	return getTrimmedNum({ placementOfFoods }) + NUM_OF_WATER + getTrimmedNum({ part: 'back', placementOfFoods });
};

const solution2 = food => {
	let result = '';
	const NUM_OF_WATER = '0';

	for (let i = 1; i < food.length; i++) {
		result += String(i).repeat(Math.floor(food[i] / 2));
	}

	return result + NUM_OF_WATER + [...result].reverse().join('');
};

console.log(solution1([1, 3, 4, 6]));
console.log(solution1([1, 7, 1, 2]));
console.log(solution2([1, 3, 4, 6]));
console.log(solution2([1, 7, 1, 2]));
