// 입출력만 통과
const solution = (people, limit) => {
	const orderedPeople = people.sort((a, b) => b - a);

	const stack = [];
	let count = 0;

	// 50 50 70 80

	for (var i = 0; i < orderedPeople.length; i++) {
		const person = orderedPeople[i];

		if (stack.length === orderedPeople.length) break;
		if (orderedPeople[i + 1] === undefined) count += 1;

		for (let j = i + 1; j < orderedPeople.length; j++) {
			if (person + orderedPeople[j] > limit) {
				stack.push(person);
				count += 1;
				break;
			} else {
				stack.push(person, orderedPeople[j]);
				count += 1;
				console.log('here');
				i += 1;
			}
		}
	}

	return count;
};

// 전체 통과
const solution2 = (people, limit) => {
	let answer = 0;

	/**1. people을 내림 차순으로 정렬한다.
    * 2. 첫 번째 수(가장 큰 수)와 마지막 수(가장 작은 수)를 더한 값을 구한다.
        2-1. limit을 넘는다면 (첫 번째 수만 배에 태우기 때문에) 다음 수로 향하도록 l + 1 한다.
        2-2. limit을 넘지 않으면 (첫번째 수와 마지막 수를 배에 태우기 때문에) 양 끝에서 다음 수로 향하도록 left + 1, right - 1 한다.
      3. 혼자 탄 배 추가를 위해 answer + 1
      4. 함께 탄 배 추가를 위해 answer + 1
      5. 만약 people[left] == people[right] 즉, 계산되지 않은 마지막 숫자가 남았다면, 이 숫자 혼자 타는 배를 추가하기 위해 answer + 1 한다.
   */

	const _people = people.sort((a, b) => b - a);
	let left = 0;
	let right = people.length - 1;

	while (left < right) {
		let sum = _people[l] + _people[r];

		if (sum > limit) {
			left += 1;
		} else {
			left += 1;
			right -= 1;
		}
		answer += 1;
	}

	if (left === right) answer += 1;

	return answer;
};

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
