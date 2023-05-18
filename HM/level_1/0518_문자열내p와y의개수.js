const count = (str, target) => {
	const regExp = new RegExp(target, 'g');
	return (str.match(regExp) ?? []).length;
};

function solution(s) {
	const sToLowercase = s.toLowerCase();

	return count(sToLowercase, 'p') === count(sToLowercase, 'y');
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
