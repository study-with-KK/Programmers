// function solution(lottos, winNums) {
//   const matchedNums = lottos.filter(num => num === winNums.filter(winNum => num === winNum)[0]);
//   const unHiddenNums = lottos.filter(num => num !== 0);
//   const hiddenNumsLength = lottos.length - unHiddenNums.length;

//   const maxRank = matchedNums.length + hiddenNumsLength || 1;
//   const minRank = matchedNums.length === 0 ? 1 : matchedNums.length;

//   return [7 - maxRank, 7 - minRank];
// }

function solution(lottos, winNums) {
	const rank = [6, 6, 5, 4, 3, 2, 1];

	const minRank = lottos.filter(num => winNums.includes(num)).length;
	const hiddenNums = lottos.filter(num => !num).length;

	const maxRank = minRank + hiddenNums;

	return [rank[maxRank], rank[minRank]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
console.log(solution([1, 2, 3, 4, 5, 6], [20, 9, 7, 45, 8, 35]));
