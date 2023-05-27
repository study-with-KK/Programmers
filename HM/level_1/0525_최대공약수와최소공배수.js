const solution = (n, m) => {
	const arr = [n, m].sort((a, b) => a - b);

	const getGCD = (n, m) => (n % m === 0 ? m : getGCD(m, n % m));
	const getLCM = (n, m) => (n * m) / getGCD(n, m);

	return [getGCD(...arr), getLCM(...arr)];
};

console.log(solution(3, 12));
console.log(solution(2, 5));
