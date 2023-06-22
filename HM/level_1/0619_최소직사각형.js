// 완전탐색

const businessCard = sizes => {
	const controlArr = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

	const width = controlArr.map(control => control[0]);
	const height = controlArr.map(control => control[1]);
	return Math.max(...width, 0) * Math.max(...height, 0);
};

console.log(
	businessCard([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	]),
);
console.log(
	businessCard([
		[10, 7],
		[12, 3],
		[8, 15],
		[14, 7],
		[5, 15],
	]),
);
console.log(
	businessCard([
		[14, 4],
		[19, 6],
		[6, 16],
		[18, 7],
		[7, 11],
	]),
);
