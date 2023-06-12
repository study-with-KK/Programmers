/**
 * a : 콜라 가격 - 빈 병 a개
 * b : 빈 병 a개당 교환 받는 콜라 병 수
 * n : 초기 빈병 개수
 */

function solution(a, b, n) {
	let empty = n;
	let coke = 0;
	let newCoke = 0;

	while (empty >= a) {
		newCoke = Math.floor(empty / a) * b;
		coke += newCoke;
		empty = newCoke + (empty % a);
	}

	return coke;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
