const solution = x => {
	const TERNARY_THREE = 3;
	return parseInt([...x.toString(3)].reverse().join(''), TERNARY_THREE);
};

console.log(solution(45));
console.log(solution(125));
