function solution(dartResult) {
	const nums = [];
	const sdt = {
		S: 1,
		D: 2,
		T: 3,
	};
	let star1 = 0;
	let star2 = 0;

	// 파싱을 한다.
	for (let i = 0; i < dartResult.length; i++) {
		switch (dartResult[i]) {
			// *# 이 나올경우
			case '*':
				star1 = nums.pop() * 2;

				if (nums.length > 0) {
					star2 = nums.pop() * 2;
					nums.push(star2);
				}

				nums.push(star1);
				break;

			case '#':
				nums.push(nums.pop() * -1);
				break;

			// SDT 이 나올경우
			case 'S':
			case 'D':
			case 'T':
				nums.push(nums.pop() ** sdt[dartResult[i]]);
				break;

			// 숫자가 나올 경우
			case '0':
				if (nums.at(-1) === '1') {
					nums.pop();
					nums.push(10);
				} else {
					nums.push(dartResult[i]);
				}
				break;

			default:
				nums.push(dartResult[i]);
				break;
		}
	}

	// 점수 계산식

	return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D2S0T'));
console.log(solution('1S*2T*3S'));
console.log(solution('1D#2S*3S'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));
