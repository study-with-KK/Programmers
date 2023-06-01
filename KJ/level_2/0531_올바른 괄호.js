function solution(s) {
	const parentheses = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			parentheses.push('(');
		} else {
			if (parentheses.length === 0) return false;

			parentheses.pop();
		}
	}

	return parentheses.length === 0;
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
