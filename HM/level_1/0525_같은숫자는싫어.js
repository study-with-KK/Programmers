const solution = arr => {
	// const arrWithNonDuplication = [];
	// arr.forEach((value, idx) =>
	// 	idx === 0 ? arrWithNonDuplication.push(value) : arr[idx - 1] !== value ? arrWithNonDuplication.push(value) : null,
	// );
	// return arrWithNonDuplication;

	return arr.filter((val, idx) => val !== arr[idx + 1]);
};

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
