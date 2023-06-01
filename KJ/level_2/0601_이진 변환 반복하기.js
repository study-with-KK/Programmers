function solution(s) {
	let string = s;
	let count = 0;
	let zeros = 0;

	while (string !== '1') {
		zeros += string.length - string.match(/1/g).length;

		string = string.match(/1/g).length.toString(2);

		count += 1;
	}

	return [count, zeros];
}

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
