function solution(arr1, arr2) {
	const answer = arr1.map((rows, i) => rows.map((_, j) => arr1[i][j] + arr2[i][j]));

	return answer;
}

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
