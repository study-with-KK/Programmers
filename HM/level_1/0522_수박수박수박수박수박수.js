// 1차 풀이
const solution = n => {
	const odd = '수';
	const even = '박';

	return Array.from({ length: n }, (_, idx) => (idx % 2 === 0 ? odd : even)).join('');
};

console.log(solution(3));
console.log(solution(4));

// 다른 풀이
// repeat 메서드 활용
const waterMelon = n => '수박'.repeat(n / 2) + (n % 2 === 0 ? '' : '수');

console.log(waterMelon(3));
