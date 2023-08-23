function solution(priorities, location) {
	const answer = [];
	const queue = [];
	const table = Array.from({ length: priorities.length }, (_, i) => i);
	const target = table[location];

	while (priorities.length > 0) {
		if (priorities[0] === Math.max(...priorities)) {
			queue.push(priorities.shift());
			answer.push(table.shift());
		} else {
			priorities.push(priorities.shift());
			table.push(table.shift());
		}
	}

	return answer.indexOf(target) + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

/**
 * priorities  | queue
 *    2 1 3 2  |
 *    1 3 2 2  |
 *    3 2 2 1  |
 *      2 2 1  | 3
 *        2 1  | 3 2
 *          1  | 3 2 2
 *             | 3 2 2 1
 */
