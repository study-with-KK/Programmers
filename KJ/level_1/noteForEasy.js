function solution(n) {
  const convertedNumber = n.toString(3).split('');

  return convertedNumber.reduce((acc, cur, i) => acc + cur * 3 ** i, 0);
}

console.log(solution(45));
console.log(solution(125));
