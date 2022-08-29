function solution(s){  
  let answer="";
  
  for (let x of s) {
    // x랑 answer를 비교 크면 answer에 대체하고 for문이 끝나면 answer return 
    if (x.length > answer.length) {
      answer = x;
    }
  }
  return answer;
}
let s=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(s));
