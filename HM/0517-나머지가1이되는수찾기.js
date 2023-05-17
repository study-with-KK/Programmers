function solution(n) {
  const target = [];
  for (let x = 1; x < n; x++) {
    if (n % x === 1) {
      target.push(x);
      break;
    }
  }

  return target[0];
}
