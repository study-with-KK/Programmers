const parenthesisCheck = s => {
	const temp = [];

	if (s.length % 2 !== 0) return false;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			temp.push(s[i]);
		} else if (
			(s[i] === ')' && temp.includes('(')) ||
			(s[i] === '}' && temp.includes('{')) ||
			(s[i] === ']' && temp.includes('['))
		) {
			temp.pop();
		} else {
			return false;
		}
	}

	return true;
};

function solution(s) {
	let answer = 0;

	let temp = s;

	for (let i = 0; i < s.length; i++) {
		temp = s.substring(i) + s.substring(0, i);

		if (parenthesisCheck(temp)) answer += 1;
	}

	return answer;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
