function solution(n) {
  return [...(n + "")].map(Number).reduce((prev, curr) => prev + curr, 0);
}
