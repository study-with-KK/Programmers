function solution(sizes) {
	const width = sizes.reduce((acc, cur) => Math.max(cur[0] > cur[1] ? cur[0] : cur[1], acc), 0);
	const height = sizes.reduce((acc, cur) => Math.max(cur[0] > cur[1] ? cur[1] : cur[0], acc), 0);

	return width * height;
}

console.log(
	solution([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	]),
);
console.log(
	solution([
		[10, 7],
		[12, 3],
		[8, 15],
		[14, 7],
		[5, 15],
	]),
);
console.log(
	solution([
		[14, 4],
		[19, 6],
		[6, 16],
		[18, 7],
		[7, 11],
	]),
);
