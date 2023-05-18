// 핸드폰 번호 가리기
// 문자열과 정규표현식을 이용

function solution(phoneNumber) {
  // return phoneNumber.replace(/\d(?=\d{4})/g, '*');

  return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);
}

console.log(solution('01033334444'));
console.log(solution('027778888'));

/**
 *
 * /\d/는 단일 숫자 문자에 일치합니다.
 * (?=\d{4})는 긍정형 전방탐색(positive lookahead assertion)으로,
 * 현재 숫자 다음에 나오는 네 개의 문자가 숫자인지 확인합니다.
 * 이 조건이 참이면 매치가 성공하고, 거짓이면 매치가 실패합니다.
 * \d{4}는 정확히 연속된 네 개의 숫자를 매치합니다.
 * 정규식 마지막에 있는 g 플래그는 전역 검색(global search)을 나타내며,
 * 입력 문자열 전체에서 모든 매치를 찾습니다. 첫 번째 매치만 찾는 것이 아니라 모든 매치를 찾습니다.
 */
