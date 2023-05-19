const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = [...upperCaseAlphabet, ...upperCaseAlphabet.toLowerCase()];
const indexOfZ = 25;

// Z -> A
// p1, p2는 regex의 그룹으로 묶은 regExp 하나씩을 의미
// 소문자 a-z인지 대문자 A-Z인지 문자열 하나씩 판단
// 소문자이면 match.charCodeAt() => x

// 'a'.charCodeAt() = 97 + 25 => z
// 'A'.charCodeAt() = 65

// * 65~90 : A-Z
// * 97~122 : a-z
// * str.charCodeAt(index = 0) : 문자열의 인덱스에 해당하는 문자의 아스키코드 숫자를 반환
// * String.fromCharCode(n1, n2, n3, ...) : number에 해당하는 아스키코드로 변환

// 0 1 2 3 4 ... 25
// a b c d e ... z

// '' : 32

const solution = (s, n) => {
	const GAP = 26;
	const replacedStr = s.replace(/([A-Z])|([a-z])/g, (matched, reg1, reg2) => {
		const startCode = reg1 ? 'A'.charCodeAt() : 'a'.charCodeAt();

		return String.fromCharCode(((matched.charCodeAt() - startCode + n) % GAP) + startCode);
	});

	return replacedStr;
};

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
