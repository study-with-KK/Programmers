const firstSolver = [1, 2, 3, 4, 5];
const secondSolver = [2, 1, 2, 3, 2, 4, 2, 5];
const thirdSolver = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const solvers = [{ 1: firstSolver }, { 2: secondSolver }, { 3: thirdSolver }];

const solution = answers => {
	const countArr = [];

	const checkIsAnswer = arr => {
		let count = 0;

		answers.forEach((answer, idx) => answer === arr[idx % arr.length] && (count += 1));

		countArr.push(count);
	};

	solvers.forEach((solver, idx) => checkIsAnswer(solver[idx + 1]));

	const maxNum = Math.max(...countArr, 0);

	// use ternary operator to return 0 instead of false(Boolean)
	return countArr.map((count, idx) => count === maxNum && idx + 1).filter(solver => typeof solver !== 'boolean');
};

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]

interface City {
	name: string;
	state: string;
}

const cities: City[] = [
	{ name: 'Seattle', state: 'Washington' },
	{ name: 'Los Angeles', state: 'California' },
	{ name: 'Atlanta', state: 'Georgia' },
];
