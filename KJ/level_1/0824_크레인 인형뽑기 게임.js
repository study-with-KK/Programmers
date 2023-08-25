function solution(board, moves) {
	let answer = 0;
	const basket = [];

	// moves를 순회하며
	for (let i = 0; i < moves.length; i++) {
		// board[j]의 moves[i]-1의 열들을 검사하여
		for (let j = 0; j < board.length; j++) {
			// 0이 아니면
			if (board[j][moves[i] - 1] !== 0) {
				// 바구니에 그 값을 집어넣고
				basket.push(board[j][moves[i] - 1]);
				// 0으로 바꿔준다
				board[j][moves[i] - 1] = 0;
				break;
			}
		}

		// basket을 검사
		if (basket.length >= 2) {
			if (basket.at(-1) === basket.at(-2)) {
				basket.splice(-2);
				answer += 2;
			}
		}
	}

	return answer;
}

console.log(
	solution(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4],
	),
);
