// 10층으로 가기위한 최솟값
function solution(storey) {
	let answer = 0;
	const _storey = storey + '';
	const nums = [];

	for (let i = 0; i < _storey.length; i++) {
		nums.push(+_storey[i]);
	}

	while (nums.length > 1) {
		const temp = nums.pop();

		if (temp < 5) {
			answer += temp;
		} else if (temp === 5) {
			if (nums.at(-1) < 5) {
				answer += temp;
			} else {
				answer += 10 - temp;
				nums.push(nums.pop() + 1);
			}
		} else {
			answer += 10 - temp;
			nums.push(nums.pop() + 1);
		}
	}

	const last = nums.pop();

	answer += last <= 5 ? last : 11 - last;

	return answer;
}

// 재귀 풀이
function reculsive(storey) {
	if (storey < 5) return storey;
	const r = storey % 10;
	const m = (storey - r) / 10;
	return Math.min(r + reculsive(m), 10 - r + reculsive(m + 1));
}

console.log(reculsive(16));
console.log(reculsive(2554));
console.log(reculsive(75)); // 8
console.log(reculsive(555)); // 14
console.log(reculsive(155)); // 11
console.log(reculsive(154)); // 10
console.log(reculsive(545)); // 14
