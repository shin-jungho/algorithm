function solution(s){  
  let answer;
  let mid = Math.floor(s.length / 2);

  // s길이가 짝수 홀수 일때를 나눠서 중간값 추출
  // substring, substr사용함
  if (s.length % 2 === 1) {
    answer = s.substring(mid, mid + 1);
  } else {
    answer = s.substring(mid - 1, mid + 1);
  }


  return answer;
}
console.log(solution("study"));