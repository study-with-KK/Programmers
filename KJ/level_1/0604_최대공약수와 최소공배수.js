function solution(n, m) {
	const min = Math.min(n, m);
	const max = Math.max(n, m);
	let gcd = 1;

	for (let i = min; i > 1; i--) {
		if (max % i === 0 && min % i === 0) {
			gcd = i;
			break;
		}
	}

	return [gcd, (n * m) / gcd];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
