function solution(A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => a - b);

	let answer = 0;
	let idxA = 0;
	let idxB = 0;

	while (idxB < B.length) {
		if (A[idxA] < B[idxB]) {
			answer += 1;
			idxA += 1;
		}

		idxB += 1;
	}

	return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));

//  1   3 5 7
//  2 2 6 8

//      3 3 5 7
//  2 2 6 8
