function solution(cards1, cards2, goal) {
	let answer = '';

	// goal의 요소와 cards1의 요소들은 차례로 비교해 다를때까지 비교한다.
	let idx1 = 0;
	let idx2 = 0;

	// 다르면 card2의 요소들과 같은 작업을 한다.
	for (let i = 0; i < goal.length; i++) {
		while (goal[i] === cards1[idx1]) {
			answer += cards1[idx1];
			idx1 += 1;
		}

		while (goal[i] === cards2[idx2]) {
			answer += cards2[idx2];
			idx2 += 1;
		}
	}

	return answer === goal.join('') ? 'Yes' : 'No';
}

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
