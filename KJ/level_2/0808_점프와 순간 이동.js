function solution(n) {
	let dis = n;
	let count = 1;

	while (1) {
		if (dis <= 1) break;

		if (dis % 2 === 0) {
			dis /= 2;
		} else {
			dis -= 1;
			count += 1;
		}
	}

	return count;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
