function solution(k, scores) {
	const board = [];
	const answer = [];

	for (let i = 0; i < scores.length; i++) {
		board.push(scores[i]);
		board.sort((a, b) => b - a);

		if (board.length > k) board.pop();

		answer.push(board.at(-1));
	}

	return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
