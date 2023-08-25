function solution2(ingredient) {
	let answer = 0;
	let current = ingredient.join('');
	let prev = current;

	while (1) {
		current = prev.replace(/1231/, '');

		if (prev === current) break;

		answer += 1;
		prev = current;
	}

	return answer;
}

// 햄버거 1231
function solution(ingredients) {
	let answer = 0;
	const stack = [];
	const burger = [1, 2, 3, 1];

	for (let i = 0; i < ingredients.length; i++) {
		stack.push(ingredients[i]);

		if (
			stack.at(-4) === burger[0] &&
			stack.at(-3) === burger[1] &&
			stack.at(-2) === burger[2] &&
			stack.at(-1) === burger[3]
		) {
			stack.splice(-4);
			answer += 1;
		}
	}

	return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));

/**
 *
 * let count = 0;
 *
 *    for (let i = 0; i < ingredient.length; i++) {
 *        if (ingredient.slice(i, i + 4).join('') === '1231') {
 *            count++;
 *            ingredient.splice(i, 4);
 *            i -= 3;
 *        }
 *    }
 *
 *    return count;
 */
