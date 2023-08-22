// stack
function solution(progresses, speeds) {
	const leftDays = [];
	const stack = [];
	const temp = [];

	for (let i = 0; i < progresses.length; i++) {
		leftDays[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
	}

	for (let i = 0; i < leftDays.length; i++) {
		if (temp.length === 0) {
			temp.push(leftDays[i]);
		}

		if (temp[0] >= leftDays[i + 1]) {
			temp.push(leftDays[i + 1]);
		} else {
			stack.push(temp.length);
			temp.length = 0;
		}
	}

	return stack;
}

console.log(solution([96, 94], [3, 3]));
// console.log(solution([93, 30, 55], [1, 30, 5]));
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
