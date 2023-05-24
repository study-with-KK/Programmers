const solution = (arr1, arr2) => {
	return arr1.map((arr, i) => arr.map((item, j) => item + arr2[i][j]));
	// return arr1.map((arr, i) => arr.map((item, j) => arr1[i][j] + arr2[i][j]));

	// for (let i = 0; i < arr1.length; i++) {
	// 	const sum = [];
	// 	for (let j = 0; j < arr1[i].length; j++) {
	// 		sum.push(arr1[i][j] + arr2[i][j]);
	// 	}
	// 	answer.push(sum);
	// }
	// return answer;
};

console.log(
	solution(
		[
			[1, 2],
			[2, 3],
		],
		[
			[3, 4],
			[5, 6],
		],
	),
);

console.log(solution([[1], [2]], [[3], [4]]));
