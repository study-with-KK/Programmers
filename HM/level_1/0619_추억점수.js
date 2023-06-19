const solution = (name, yearning, photo) => {
	const obj = name.reduce((acc, cur, i) => (acc = { ...acc, [cur]: yearning[i] }), {});

	const findPersonAndPlusItem = collection =>
		collection.map(person => (name.includes(person) ? obj[person] : 0)).reduce((acc, cur) => acc + cur, 0);

	return photo.map(item => findPersonAndPlusItem(item));
};

// efficient way
const solution2 = (name, yearning, photo) => {
	return photo.map(v => v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0));
};

console.log(
	solution(
		['may', 'kein', 'kain', 'radi'],
		[5, 10, 1, 3],
		[
			['may', 'kein', 'kain', 'radi'],
			['may', 'kein', 'brin', 'deny'],
			['kon', 'kain', 'may', 'coni'],
		],
	),
);
// [19, 15, 6]

console.log(
	solution2(
		['kali', 'mari', 'don'],
		[11, 1, 55],
		[
			['kali', 'mari', 'don'],
			['pony', 'tom', 'teddy'],
			['con', 'mona', 'don'],
		],
	),
);

// [67, 0, 55]
