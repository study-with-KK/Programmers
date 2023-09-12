function solution(targets) {
	let answer = 1;

	targets.sort((a, b) => b[0] - a[0]);

	let [s, e] = targets.shift();

	for (const target of targets) {
		const [_s, _e] = target;

		if (s >= _e) {
			answer += 1;
			s = _s;
		}
	}

	return answer;
}

console.log(
	solution([
		[4, 5],
		[4, 8],
		[10, 14],
		[11, 13],
		[5, 12],
		[3, 7],
		[1, 4],
	]),
);
