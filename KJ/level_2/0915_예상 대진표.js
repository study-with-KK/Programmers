function solution(n, a, b) {
	let answer = 1;

	let [_a, _b] = [a, b];

	while (true) {
		// 현재 a,b의 번호로 만나는지 구한다.
		// 만날때 : a,b중 큰수가 짝수이고 1차이가 난다.
		if (Math.abs(_a - _b) === 1 && Math.max(_a, _b) % 2 === 0) break;

		// 안만날때 : a,b를 승리했다고 하고 라운드를 추가한다.
		_a = Math.ceil(_a / 2);
		_b = Math.ceil(_b / 2);
		answer += 1;
	}

	return answer;
}

console.log(solution(8, 4, 7));

// function sol(n, a, b) {
// 	let answer = 0;
// 	while (a !== b) {
// 		a = Math.ceil(a / 2);
// 		b = Math.ceil(b / 2);
// 		answer++;
// 	}

// 	return answer;
// }
