// 정규 표현식 다시 풀어보기

const solution = dartResult => {
	const bonus = { S: 1, D: 2, T: 3 };

	// \d: 숫자(digit)를 나타냅니다.
	// .: 임의의 문자 한 개를 의미합니다. 단, 줄바꿈 문자를 제외합니다.
	// ?: 앞의 표현식이 0 또는 1번 나타날 수 있음을 나타냅니다. 즉, 바로 앞의 문자 또는 표현식이 없거나 한 번 나타날 수 있습니다.
	// \D: 숫자가 아닌 문자를 나타냅니다.
	// /g: 전역 검색을 수행합니다. 일치하는 모든 부분을 찾습니다.

	// 라운드 별로 배열로 나누기
	let darts = dartResult.match(/\d.?\D/g);

	// 배열을 순회하면서, 각각의 문자열들을 체크
	for (let index = 0; index < darts.length; index++) {
		let [total, num, str, _bonus] = darts[index].match(/(\d{1,})([SDT])([*#])?/);

		let score = Math.pow(Number(num), bonus[str]);
		console.log(total);
		if (_bonus !== undefined) {
			switch (_bonus) {
				case '*':
					score *= 2;

					if (index > 0) darts[index - 1] *= 2;
					break;
				case '#':
					score *= -1;
					break;
				default:
					break;
			}
		}

		darts[index] = score;
	}

	return darts.reduce((a, b) => a + b);
};

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
console.log(solution('1S1S10S#')); // -8
