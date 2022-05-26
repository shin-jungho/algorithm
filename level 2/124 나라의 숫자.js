/** @format */

// 124 나라의 숫자

// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

// n % 3 === 0 이면 4
// n % 3 === 1 이면 1
// n % 3 === 2 이면 2
// ex) 1 = 1, 2 = 2, 3 = 4, 4 = 11, 5 = 12, 6 = 14 ...
function solution(n) {
  var answer = '';
  let num124 = [4, 1, 2];

  while (n > 0) {
    answer = num124[n % 3] + answer;
    // console.log('answer :', answer);
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
    // console.log('n :', n);
  }

  return answer;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
