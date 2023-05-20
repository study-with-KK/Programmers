const solution = phone_number => {
	const length = phone_number.length;
	const divisorIdx = length - 4;
	return phone_number.slice(0, divisorIdx).replace(/[0-9]/g, '*') + phone_number.slice(divisorIdx, length);
};

console.log(solution('01033334444'));
console.log(solution('027778888'));
