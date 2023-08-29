function solution(idList, report, k) {
	const answer = [];

	// id별 신고당한 횟수
	const reportedCount = {};

	// 신고 중복 제거
	const reports = [...new Set(report)];

	// id별 신고 유저 목록
	const reportListbyId = {};

	for (const id of idList) {
		reportListbyId[id] = [];
		reportedCount[id] = 0;
	}

	for (const report of reports) {
		const [sub, obj] = report.split(' ');
		reportedCount[obj] += 1;

		reportListbyId[sub].push(obj);
	}

	// id별 메일 발송횟수
	for (const id of idList) {
		let tempCount = 0;

		for (const name of reportListbyId[id]) {
			if (reportedCount[name] >= k) tempCount += 1;
		}

		answer.push(tempCount);
	}

	return answer;
}

console.log(
	solution(
		['muzi', 'frodo', 'apeach', 'neo'],
		['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
		2,
	),
);
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
