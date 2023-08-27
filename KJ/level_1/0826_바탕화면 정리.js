function solution(wallpaper) {
	const answer = [];
	const rows = [];
	const cols = [];

	// wallpaper를 순회
	for (let i = 0; i < wallpaper.length; i++) {
		// 행의 최솟값, 최댓값
		// 열의 최솟값, 최댓값 을 찾는다.
		if (wallpaper[i].includes('#')) {
			rows.push(i);
			cols.push(wallpaper[i].indexOf('#'));
			cols.push(wallpaper[i].lastIndexOf('#'));
		}
	}

	answer.push(Math.min(...rows));
	answer.push(Math.min(...cols));
	answer.push(Math.max(...rows) + 1);
	answer.push(Math.max(...cols) + 1);

	return answer;
}

console.log(solution(['.#...', '..#..', '...#.']));
console.log(solution(['..........', '.....#....', '......##..', '...##.....', '....#.....']));
console.log(solution(['.##...##.', '#..#.#..#', '#...#...#', '.#.....#.', '..#...#..', '...#.#...', '....#....']));
console.log(solution(['..', '#.']));
