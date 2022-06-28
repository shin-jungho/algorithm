// 문자열 다루기
// s의 길이 4 or 6 
// Number에서 지수형식 나오면 e도 숫자 처리 되므로 parseInt 사용하기

function solution(s) {
  var answer = true;
  
  if (s.length !== 4 && s.length !== 6) {
    return false
  }
  for(let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i], 10))) {
      return false;
    }
  } 
  return answer;
}

console.log(solution('a234'));
console.log(solution('1234'));
