// 2021 KAKAO BLIND RECRUITMENT

function solution(newId) {
	const tempId = newId
		.toLowerCase()
		.replace(/[^-.\w]/g, '')
		.replace(/\.+/g, '.')
		.replace(/^\.|\.$/g, '')
		.replace(/^$/g, 'a')
		.slice(0, 15)
		.replace(/\.$/g, '');

	const { length } = tempId;

	return length > 2 ? tempId : tempId + tempId.at(-1).repeat(3 - length);
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
