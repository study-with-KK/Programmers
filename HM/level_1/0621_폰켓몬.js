const solution = nums => {
	const length = nums.length / 2;

	// const filtered = nums.filter((num, idx) => nums.indexOf(num) === idx);
	const filtered = [...new Set(nums)]; // 시간이 더 빠름

	return length < filtered.length ? length : filtered.length;
};

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
