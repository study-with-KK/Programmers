function solution(price, money, count) {
	const totalPrice = Array.from({ length: count }, (_, i) => i + 1).reduce((acc, cur) => acc + cur * price, 0);

	return money > totalPrice ? 0 : totalPrice - money;
}

console.log(solution(3, 20, 4));
