const solution = (left, right) => {
	const rangeArr = Array.from({ length: right - left + 1 }, (_, idx) => left + idx);

	return rangeArr.map(num => (getDivisor(num) % 2 === 0 ? num : -num)).reduce((acc, cur) => acc + cur, 0);
};

const getDivisor = num => {
	let count = 0;

	for (let i = 1; i <= num; i++) {
		if (num % i === 0) count++;
	}

	return count;
};

console.log(solution(13, 17));
console.log(solution(24, 27));

// 제곱근이 정수면, 약수의 갯수가 홀수

const solution = (left, right) => {
	var answer = 0;
	for (let i = left; i <= right; i++) {
		if (Number.isInteger(Math.sqrt(i))) {
			answer -= i;
		} else {
			answer += i;
		}
	}
	return answer;
};
