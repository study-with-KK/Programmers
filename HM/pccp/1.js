function solution(input_string) {
	// 2회 이상
	// 나뉘어 있는 경우

	// e.g) e d e aaa bb cc d
	const obj = {};

	for (let i = 0; i < input_string.length; i++) {
		obj[input_string[i]] = [...(obj[input_string[i]] ?? []), i];
	}

	const checkInOrder = item => {
		for (let i = 0; i < item.length - 1; i++) {
			if (item[i] + 1 !== item[i + 1]) {
				return false;
			}
		}

		return true;
	};

	const check = Object.values(obj).map((item, idx) => checkInOrder(item));

	const aloneArr = Object.keys(obj).filter((_, idx) => check[idx] === false);

	if (aloneArr.length === 0) {
		return 'N';
	}

	return aloneArr.sort().join('');
}
