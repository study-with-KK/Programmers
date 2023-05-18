// 포켓몬

function solution(nums) {
  const N = nums.length / 2;
  const answer = [...new Set(nums)];

  return answer.length < N ? answer.length : N;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
