/**
 * 아스키코드로 풀기
 * 65~90 : A-Z
 * 97~122 : a-z
 * 32 : ' '
 * str.charCodeAt(index) : 문자열의 인덱스에 해당하는 문자의 아스키코드 숫자를 반환
 * String.fromCharCode(n1, n2, n3, ...) : number에 해당하는 아스키코드로 변환
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */

function solution(s, n) {
	return s.replace(/([a-z])|([A-Z])/g, (match, lowerCase) => {
		const firstCode = lowerCase ? 'a'.charCodeAt() : 'A'.charCodeAt();

		return String.fromCharCode(((match.charCodeAt() - firstCode + n) % 26) + firstCode);
	});
}

function solution2(s, n) {
	const ascii = s.split('').map(char => char.charCodeAt());
	let answer = '';

	for (let i = 0; i < ascii.length; i++) {
		if (ascii[i] >= 65 && ascii[i] <= 90) {
			const char = ascii[i] + n > 90 ? ascii[i] + n - 26 : ascii[i] + n;
			answer += String.fromCharCode(char);
		}

		if (ascii[i] >= 97 && ascii[i] <= 122) {
			const char = ascii[i] + n > 122 ? ascii[i] + n - 26 : ascii[i] + n;
			answer += String.fromCharCode(char);
		}

		if (ascii[i] === 32) answer += String.fromCharCode(ascii[i]);
	}

	return answer;
}

// function solution3(s, n) {
// 	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	const lowerCase = upperCase.toLowerCase();
// 	let answer = '';

// 	for (let i = 0; i < s.length; i++) {
// 		const char = s[i];
// 		if (char === ' ') {
// 			answer += ' ';
// 			continue;
// 		}

// 		const tempCase = upperCase.includes(char) ? upperCase : lowerCase;
// 		let index = tempCase.indexOf(char) + n;

// 		if (index >= tempCase.length) index -= tempCase.length;

// 		answer += tempCase[index];
// 	}

// 	return answer;
// }

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
