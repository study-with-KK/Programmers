function solution(a, b) {
	const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

	return day[new Date(2016, a - 1, b).getDay()];
}

console.log(solution(1, 1));
console.log(solution(5, 24));
