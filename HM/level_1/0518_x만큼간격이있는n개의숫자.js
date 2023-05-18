function solution(x, n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(x + i * x);
  }

  return arr;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
