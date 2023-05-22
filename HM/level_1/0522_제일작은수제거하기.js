const solution = arr => {
	const minNum = Math.min(...arr);
	const filteredArr = arr.filter(num => minNum !== num);

	return filteredArr.length === 0 ? [-1] : filteredArr;
};

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
