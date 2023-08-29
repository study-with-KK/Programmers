function solution2(park, routes) {
	const [width, height] = [park.length, park[0].length];

	// 현재 강아지의 위치
	let pos = {};

	// 강아지의 처음 위치
	for (let row = 0; row < width; row++) {
		for (let col = 0; col < height; col++) {
			if (park[row][col] === 'S') {
				pos.row = row;
				pos.col = col;
			}
		}
	}

	// routes를 순회
	for (const route of routes) {
		const [dir, n] = route.split(' ');

		const nextPos = { ...pos };
		let isX = false;

		for (let i = 0; i < n; i++) {
			switch (dir) {
				case 'N':
					nextPos.row -= +1;
					break;
				case 'S':
					nextPos.row += +1;
					break;
				case 'W':
					nextPos.col -= +1;
					break;
				case 'E':
					nextPos.col += +1;
					break;
				default:
					break;
			}

			// nextPos가 범위 내인가
			if (nextPos.row < 0 || height - 1 < nextPos.row || nextPos.col < 0 || width - 1 < nextPos.col) {
				isX = true;
				break;
			}

			// nextPos가 X가 아닌가(가는 길도 포함)
			if (park[nextPos.row][nextPos.col] === 'X') {
				isX = true;
				break;
			}
		}

		if (!isX) {
			pos = { ...nextPos };
		}
	}

	return [pos.row, pos.col];
}

function solution(park, routes) {
	let pos = [0, 0];
	const dict = {
		E: [0, 1],
		W: [0, -1],
		S: [1, 0],
		N: [-1, 0],
	};

	for (let i = 0; i < park.length; i++) {
		const findedIdx = park[i].indexOf('S');
		if (findedIdx > -1) {
			pos = [i, findedIdx];
			break;
		}
	}

	routes.forEach(route => {
		const [op, n] = route.split(' ');
		const tempPos = [...pos];
		let no = false;

		for (let i = 0; i < n; i++) {
			tempPos[0] += dict[op][0];
			tempPos[1] += dict[op][1];

			if (tempPos[0] < 0 || tempPos[0] > park.length - 1 || tempPos[1] < 0 || tempPos[1] > park[0].length - 1) {
				no = true;
				break;
			}

			if (park[tempPos[0]][tempPos[1]] === 'X') {
				no = true;
				break;
			}
		}

		if (!no) {
			pos = tempPos;
		}
	});

	return pos;
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
