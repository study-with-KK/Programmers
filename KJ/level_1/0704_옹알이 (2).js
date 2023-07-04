function solution(babblings) {
	let answer = 0;

	babblings.forEach(word => {
		answer += !/(aya|ye|woo|ma)\1+/.test(word) && /^(aya|ye|woo|ma)+$/.test(word) ? 1 : 0;
	});

	return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
