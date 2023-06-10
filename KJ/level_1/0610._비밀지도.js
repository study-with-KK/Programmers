function solution(n, arr1, arr2) {
	const answer = [];

	for (let i = 0; i < n; i++) {
		const cellA = arr1[i].toString(2).padStart(n, '0').split('');
		const cellB = arr2[i].toString(2).padStart(n, '0').split('');

		let temp = '';

		for (let j = 0; j < n; j++) {
			if (+cellA[j] || +cellB[j]) {
				temp += '#';
			} else {
				temp += ' ';
			}
		}

		answer.push(temp);
	}

	return answer;
}

// js에서도 비트연산을 쓸 수 있나보다...
// const solution2 = (n, a, b) =>
// 	a.map((_, i) => (a[i] | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'));

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
