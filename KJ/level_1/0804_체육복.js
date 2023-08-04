// n : 전체 학생 수
// lost : 체육복을 도난당한 학생들의 번호가 담긴 배열
// reserve : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

function solution(n, lost, reserve) {
	const answer = Array.from({ length: n }, () => 1);

	lost.forEach(v => {
		answer[v - 1] -= 1;
	});

	reserve.forEach(v => {
		answer[v - 1] += 1;
	});

	for (let i = 0; i < answer.length; i++) {
		if (answer[i] === 0) {
			if (answer[i - 1] > 1) {
				answer[i - 1] -= 1;
				answer[i] += 1;
			} else if (answer[i + 1] > 1) {
				answer[i + 1] -= 1;
				answer[i] += 1;
			} else {
				// do nothing
				continue;
			}
		}
	}

	return answer.filter(v => v).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
