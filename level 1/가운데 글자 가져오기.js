// 가운데 글자 가져오기
// floor, ceil 쓰는 이유가 있었음

function solution(s) {
  var answer = (s.length % 2 === 0) ? s.substr((s.length / 2) - 1, 2) : s.substr((s.length / 2), 1) ;
  
  return answer;
}

console.log(solution('abcdefg'));