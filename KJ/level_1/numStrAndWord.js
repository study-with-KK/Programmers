// 2021 카카오 채용연계형 인턴십
function solution(s) {
  const answer = s
    .replace(/zero/g, '0')
    .replace(/one/g, '1')
    .replace(/two/g, '2')
    .replace(/three/g, '3')
    .replace(/four/g, '4')
    .replace(/five/g, '5')
    .replace(/six/g, '6')
    .replace(/seven/g, '7')
    .replace(/eight/g, '8')
    .replace(/nine/g, '9');

  return +answer;
}

// 다른 풀이
const solution2 = s => {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  numbers.forEach((number, i) => {
    const arr = answer.split(numbers[i]);
    answer = arr.join(i);
  });

  return +answer;
};

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
