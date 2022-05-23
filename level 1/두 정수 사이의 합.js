// 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  var answer = 0;

  for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}

function solution(a, b) {
  
  return ((Math.max(a, b) - Math.min(a ,b) + 1) * (Math.min(a, b) + Math.max(a, b))) / 2 
}

console.log(solution(3, 5));
console.log(solution(5, 3));