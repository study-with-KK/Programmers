const solution = (k, score) => {
	let trophy = [];
	const lowestRank = [];

	for (let i = 0; i < score.length; i++) {
		trophy = [...trophy, score[i]].sort((a, b) => b - a).slice(0, k);
		lowestRank.push(trophy[trophy.length - 1]);
	}

	return lowestRank;
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
