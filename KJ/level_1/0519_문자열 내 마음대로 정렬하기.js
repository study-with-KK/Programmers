function solution(strings, n) {
	return strings.sort().sort((cur, next) => cur[n].charCodeAt() - next[n].charCodeAt());
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
