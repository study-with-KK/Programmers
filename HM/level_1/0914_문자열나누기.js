const solution = s => {
	let count = 0;

	let stack = [];

	for (let pos = 0; pos < s.length; pos += 1) {
		stack.push(s[pos]);

		const firstEl = stack[0];
		const same = stack.filter(item => item === firstEl);
		const diff = stack.filter(item => item !== firstEl);

		if (same.length === diff.length) {
			count += 1;
			stack = [];
		}
	}

	if (stack.length !== 0) {
		count += 1;
	}

	return count;
};
