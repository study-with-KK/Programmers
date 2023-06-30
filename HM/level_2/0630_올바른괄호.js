const solution = s => {
	const _s = [...s];
	const stack = [];

	// for (let i = 0; i < _s.length; i++) {
	//   if(_s[i] === '('){
	//     stack.push(s[i])
	//   } else if(_s[i] === ')'){
	//     if(stack.length === 0){
	//       return false;
	//     } else if (stack.length !== 0 && stack[stack.length - 1] === '('){
	//       stack.pop();
	//     }
	//   }
	// }

	for (let i = 0; i < _s.length; i++) {
		if (stack[stack.length - 1] === '(' && _s[i] === ')') {
			stack.pop();
		} else {
			stack.push(_s[i]);
		}
	}

	// return !stack.length;
	return stack.length === 0 ? true : false;
};

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false

const solution2 = s => {
	let count = 0;
	for (const str of s) {
		count += str === '(' ? 1 : -1;

		if (count < 0) return false;
	}

	return count === 0 ? true : false;
};
