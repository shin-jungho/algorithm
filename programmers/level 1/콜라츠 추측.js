// 콜라츠 추측

// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

function solution(num) {
  var answer = 0;

  while (answer <= 500) {
    if (num === 1) return answer;
    num = num % 2 === 0? (num / 2) : num * 3 + 1;
    answer++;
  }
  return -1;
}

console.log(solution(16));
console.log(solution(626331));