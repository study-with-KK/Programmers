const solution = x => x % [...x.toString()].reduce((p, c) => Number(p) + Number(c), 0) === 0;
const solution2 = x => !(x % [...x.toString()].map(Number).reduce((p, c) => p + c, 0));

console.log(solution2(10));
console.log(solution2(11));
console.log(solution2(12));
console.log(solution2(13));
