const getBinaryArr = item => [...item.toString(2)];

const solution = (n, arr1, arr2) => {
	// '#' - '1' | ' ' - '0'
	const createBinaryTwoDimensionalArr = arr =>
		arr.map(item =>
			getBinaryArr(item).length < n
				? [...'0'.repeat(n - getBinaryArr(item).length), ...getBinaryArr(item)]
				: getBinaryArr(item),
		);

	const binaryArr1 = createBinaryTwoDimensionalArr(arr1);
	const binaryArr2 = createBinaryTwoDimensionalArr(arr2);

	const decodedSecretMap = Array.from({ length: n }, () => []);

	binaryArr1.forEach((arr, arrIdx) =>
		arr.forEach((item, idx) => {
			if (item === '1' || binaryArr2[arrIdx][idx] === '1') {
				decodedSecretMap[arrIdx].push('#');
			} else if (item === '0' && binaryArr2[arrIdx][idx] === '0') {
				decodedSecretMap[arrIdx].push(' ');
			}
		}),
	);

	return decodedSecretMap.map(item => item.join(''));
};

/**
 * OR(|) 연산 - 비트 연산자
 * A | B - 두 비트 중 하나라도 1일 경우 1, 두 비트 0인 경우 0을 반환
 * A와 B가 문자열 또는 숫자인 경우에도 이진수로 변환후 각 자리마다 비교한 후, 다시 10진수로 변환하여 반환한다.
 */

// const addZero = (n, str) => '0'.repeat(n - str.length) + str;
const addZero = (n, str) => str.padStart(n, '0');

const solution2 = (n, arr1, arr2) => {
	return arr1.map((item, arrIdx) =>
		addZero(n, (item | arr2[arrIdx]).toString(2)).replace(/1|0/g, matched => (+matched ? '#' : ' ')),
	);
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution2(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
