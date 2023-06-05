const solution = (strings, n) => {
	return strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
};

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
