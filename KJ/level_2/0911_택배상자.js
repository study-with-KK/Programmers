function solution(order) {
	let answer = 0;
	let main = 1;
	let i = 0;
	const sub = [];

	while (main <= order.length + 1) {
		// 컨베이어 벨트에 있을 때
		if (order[i] === main) {
			answer += 1;
			i += 1;
			main += 1;
		} // 보조 컨베이어 벨트에 있을 때
		else if (sub.length !== 0 && sub.at(-1) === order[i]) {
			answer += 1;
			i += 1;
			sub.pop();
		} else {
			sub.push(main);
			main += 1;
		}
	}

	// console.log('main', main, 'sub', sub, 'answer', answer);

	return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
console.log(solution([3, 5, 4, 2, 1]));
