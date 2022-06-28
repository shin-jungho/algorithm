// 음양 더하기

function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    answer += signs[i] ? absolutes[i] : -1 * absolutes[i];
  }

  return answer;
}

console.log(solution([4, 7, 12],[true, false, true]));