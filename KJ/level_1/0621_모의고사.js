function solution(answers) {
	const students = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];

	const scores = students.map(student =>
		answers.reduce((acc, _, i) => (student[i % student.length] === answers[i] ? acc + 1 : acc), 0),
	);

	const max = Math.max(...scores);

	return scores.map((v, i) => (v === max ? i + 1 : 0)).filter(v => v !== 0);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
