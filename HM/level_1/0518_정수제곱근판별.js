function solution(n) {
	const answer = [];
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (i ** 2 === n) {
			answer.push(i);
			break;
		}
	}

	return answer.length === 0 ? -1 : (answer[0] + 1) ** 2;
}

console.log(solution(121));
console.log(solution(3));
