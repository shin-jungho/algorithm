// 학생수보다 연필 1자루씩 나누어 주고 남는 연필에 대해 언급이 없으므로
// 학생수 / 12해서 올림을 하면 한명씩 나눠줄 수 있다.
function solution(n){
  let answer = 0;
  answer = Math.ceil((n / 12));
  return answer;
}

console.log(solution(178));