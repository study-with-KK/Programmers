function solution2(arr1, arr2) {
	const answer = [];

	for (let row = 0; row < arr1.length; row++) {
		const tempArr = [];

		for (let i = 0; i < arr2[0].length; i++) {
			let temp = 0;

			for (let j = 0; j < arr1[row].length; j++) {
				temp += arr1[row][j] * arr2[j][i];
			}

			tempArr.push(temp);
		}

		answer.push(tempArr);
	}

	return answer;
}

function solution(arr1, arr2) {
	return arr1.map(row => arr2[0].map((_, i) => row.reduce((acc, cur, j) => acc + cur * arr2[j][i], 0)));
}

console.log(
	solution(
		[
			[1, 4],
			[3, 2],
			[4, 1],
		],
		[
			[3, 3],
			[3, 3],
		],
	),
);

console.log(
	solution(
		[
			[2, 3, 2],
			[4, 2, 4],
			[3, 1, 4],
		],
		[
			[5, 4, 3],
			[2, 4, 1],
			[3, 1, 1],
		],
	),
);

console.log(
	solution(
		[
			[1, 2, 3, 4],
			[1, 2, 3, 4],
		],
		[
			[1, 2],
			[1, 2],
			[1, 2],
			[1, 2],
		],
	),
);
