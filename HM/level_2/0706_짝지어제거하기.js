const solution = s => {
	const stack = [];

	for (let idx = 0; idx < s.length; idx++) {
		if (s[idx] === stack[stack.length - 1]) {
			stack.pop();
		} else {
			stack.push(s[idx]);
		}
	}

	return stack.length > 0 ? 0 : 1;
};

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
