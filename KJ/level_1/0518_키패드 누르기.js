// 카카오 인턴
const getDistance = (posX, posY) => Math.abs(posX[0] - posY[0]) + Math.abs(posX[1] - posY[1]);

function solution(numbers, hand) {
	const numPad = {
		1: [0, 0],
		2: [0, 1],
		3: [0, 2],
		4: [1, 0],
		5: [1, 1],
		6: [1, 2],
		7: [2, 0],
		8: [2, 1],
		9: [2, 2],
		'*': [3, 0],
		0: [3, 1],
		'#': [3, 2],
	};

	let left = numPad['*'];
	let right = numPad['#'];
	let answer = '';

	numbers.forEach(number => {
		if ([1, 4, 7].includes(number)) {
			left = numPad[number];
			answer += 'L';
		} else if ([3, 6, 9].includes(number)) {
			right = numPad[number];
			answer += 'R';
		} else {
			const leftDist = getDistance(left, numPad[number]);
			const rightDist = getDistance(right, numPad[number]);

			if (leftDist < rightDist) {
				left = numPad[number];
				answer += 'L';
			} else if (leftDist > rightDist) {
				right = numPad[number];
				answer += 'R';
			} else if (hand === 'left') {
				left = numPad[number];
				answer += 'L';
			} else {
				right = numPad[numPad];
				answer += 'R';
			}
		}
	});

	return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right') === 'LRLLLRLLRRL');
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left') === 'LRLLRRLLLRR');
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right') === 'LLRLLRLLRL');
