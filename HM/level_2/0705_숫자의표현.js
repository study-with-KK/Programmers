const solution = n => {
	let count = 0;

	// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수 === 주어진 수의 홀수인 약수의 갯수
	for (let i = 1; i <= n; i++) {
		if (n % i === 0 && i % 2 === 1) count += 1;
	}

	// 1,2,3,4,5
	// 4,5,6
	// 7,8
	// 15
	return count;
};

console.log(solution(15)); // 4;
