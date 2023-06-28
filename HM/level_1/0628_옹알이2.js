const solution = babbling => {
	// const words = ['aya', 'ye', 'woo', 'ma'];

	let count = 0;
	for (const word of babbling) {
		// 연속된 같은 발음이 있는 경우
		if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

		// 발음할 수 있는 단어만 있는지 체크 (^는 문자열의 시작, $는 문자열의 마지막, +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열)
		if (/^(aya|ye|woo|ma)+$/g.test(word)) {
			count += 1;
		}
	}

	return count;
};

console.log(solution(['aya', 'yee', 'u', 'maa'])); // 1
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2

// \s 는 공백
// ^[\s]+ - 하나 이상의 공백으로 시작하는지
