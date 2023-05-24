const solution = s => {
	const charCodeArr = [...s].map(item => item.charCodeAt());

	return charCodeArr
		.sort((a, b) => b - a)
		.map(charCode => String.fromCharCode(charCode))
		.join('');
};

const solution = s => {
	return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
};

console.log(solution('Zbcdefg'));
