function solution(s) {
	const nums = s.split(' ').sort((a, b) => a - b);
	return nums[0] + ' ' + nums.at(-1);
}

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 1'));
