const solution = (a, b, n) => {
	let receivedCoke = 0;
	let total = n;

	while (total >= a) {
		const newCokes = Math.floor(total / a) * b;
		receivedCoke += newCokes;
		total = newCokes + (total % a);
	}

	return receivedCoke;
};

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9

// remains -> % 연산자를 활용하여 나머지를 활용할 수 있다
// received -> / 연산자와 Math.floor()를 활용할 수 있다.

// 20
// -> 20 - 3 * 6 = 2(remains)
// -> possess = 6(receivedCoke) + 2(remains)

// 8
// -> 8 - 3 * 2 = 2(remains)
// -> possess = 2(receivedCoke) + 2(remains)

// 4
// -> 4 - 3 * 1 = 1(remains)
// -> possess = 1(receivedCoke) + 1(remains)
