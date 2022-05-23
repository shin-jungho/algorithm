// 문자열 내림차순으로 배치
// 그냥 정렬 후 뒤집으면 됨

function solution(s) {
  let answer = s.split('').sort().reverse().join('');

  return answer;
}

console.log(solution('Zbcdefg'));