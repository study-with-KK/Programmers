const solution = s => {
	// 공백이 연속으로 나오는 경우 삭제 필요
	return s
		.split(' ')
		.map(str =>
			str === ''
				? ''
				: typeof str[0] === 'number'
				? str[0] + str.slice(1).toLowerCase()
				: str[0].toUpperCase() + str.slice(1).toLowerCase(),
		)
		.join(' ');
};

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
