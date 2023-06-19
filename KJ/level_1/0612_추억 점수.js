function solution(names, yearning, photo) {
	const table = {};

	for (let i = 0; i < names.length; i++) {
		table[names[i]] = yearning[i];
	}

	return photo.map(name => name.reduce((acc, cur) => (names.includes(cur) ? acc + table[cur] : acc), 0));
	// return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}

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
console.log(
	solution(
		['kali', 'mari', 'don'],
		[11, 1, 55],
		[
			['kali', 'mari', 'don'],
			['pony', 'tom', 'teddy'],
			['con', 'mona', 'don'],
		],
	),
);
console.log(
	solution(['may', 'kein', 'kain', 'radi'], [5, 10, 1, 3], [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']]),
);
