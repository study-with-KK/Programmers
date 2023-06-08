const numberStrWithWords = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

const solution = s => {
	const result = s
		.replace(/zero/g, numberStrWithWords['zero'])
		.replace(/one/g, numberStrWithWords['one'])
		.replace(/two/g, numberStrWithWords['two'])
		.replace(/three/g, numberStrWithWords['three'])
		.replace(/four/g, numberStrWithWords['four'])
		.replace(/five/g, numberStrWithWords['five'])
		.replace(/six/g, numberStrWithWords['six'])
		.replace(/seven/g, numberStrWithWords['seven'])
		.replace(/eight/g, numberStrWithWords['eight'])
		.replace(/nine/g, numberStrWithWords['nine']);

	return Number(result);
};

/**
 * 다른 사람의 풀이
 * 1. split 메서드로 숫자가 문자열로 정의된 배열의 값을 담고 있는지 판단하고, 이를 기준으로 문자열을 분해하여 분해된 값을 순서대로 배열로 만든다.
 * 2. join 메서드로 separator | undefined 기준으로 배열을 문자열로 합친다. split 메서드에 의해 분리되어 일부 문자열이 빈 문자열이 된 경우, 합쳐질 때 배열의 각 요소들 사이에 separator가 들어가므로, 이를 응용하여 index를 합쳐 결과를 반환하게 한다.
 * e.g.
 * ['', '4seveneight'] => '' + 1(index) +  '4seveneight' = '14seveneight'
 */

const solution2 = s => {
	let target = s;
	const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	for (let i = 0; i < num.length; i++) {
		target = target.split(num[i]).join(i);
	}
};

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));

console.log(solution2('one4seveneight'));
console.log(solution2('2three45sixseven'));
