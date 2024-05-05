// bandage : [time, +hp/s, +a]
// health : max hp
// attacks : atk time, atk power

function solution(bandage, health, attacks) {
	let hp = health;
	const lastSec = attacks.at(-1)[0];
	let tic = 0;
	let healing = 0;

	for (let i = 0; i <= lastSec; i++) {
		if (i === attacks[tic][0]) {
			hp -= attacks[tic][1];
			healing = 0;
			tic += 1;
			if (hp <= 0) return -1;
		} else {
			hp += bandage[1];
			healing += 1;

			if (healing >= bandage[0]) {
				hp += bandage[2];
				healing = 0;
			}

			if (hp > health) hp = health;
		}
	}

	return hp;
}

console.log(
	solution([5, 1, 5], 30, [
		[2, 10],
		[9, 15],
		[10, 5],
		[11, 5],
	]),
);
console.log(
	solution([3, 2, 7], 20, [
		[1, 15],
		[5, 16],
		[8, 6],
	]),
);
console.log(
	solution([4, 2, 7], 20, [
		[1, 15],
		[5, 16],
		[8, 6],
	]),
);
console.log(
	solution([1, 1, 1], 5, [
		[1, 2],
		[3, 2],
	]),
);
