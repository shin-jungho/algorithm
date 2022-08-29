function solution(s){  
  // 1. new Set 사용해서 중복 제거
  // join사용은 Array일때만 가능하다
  // return [...new Set(s.split(''))].join('');

  // 2. indexOf 사용해서 중복제거

  let answer = '';

  for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i], i + 1) === -1) { // s에 같은 문자 없을때 answer에 저장
      answer += s[i];
    }
  }

  return answer;
}
console.log(solution("ksekkset"));