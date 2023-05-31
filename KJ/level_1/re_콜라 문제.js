function solution(a, b, n) {
	// 보유 빈병 : n
	// 가격 : 빈병 a개당 b개 콜라.

	const coke = n;

	return coke;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));

//  빈병          바꾼콜라    현재콜라
//  20              0          0
//  6+ (20-6*3)     20/3       6
//  2+ (8-2*3)      8/3        2
//
//
