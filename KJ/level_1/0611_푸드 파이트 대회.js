function solution(foods) {
	let answer = '';

	for (let i = 1; i < foods.length; i++) {
		for (let j = 0; j < Math.floor(foods[i] / 2); j++) {
			answer += i;
		}
	}

	return answer + '0' + answer.split('').reverse().join('');
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
