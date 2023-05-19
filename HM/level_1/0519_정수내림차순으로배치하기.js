const solution = n => {
	return +[...(n + '')].sort((a, b) => Number(b) - Number(a)).join('');
};

console.log(solution(118372));
