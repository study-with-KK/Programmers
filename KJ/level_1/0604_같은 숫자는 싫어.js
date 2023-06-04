function solution(arr) {
	// const answer = [];
	// let prev = -1;

	// for (const num of arr) {
	// 	if (num !== prev) {
	// 		answer.push(num);
	// 		prev = num;
	// 	}
	// }

	// return answer;

	return arr.filter((num, i) => num !== arr[i - 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
