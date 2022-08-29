function solution(str){  
  // 1. new Set으로 문제 풀이
  // return [...new Set(str)]
  
  // 2. filter, indexOf 사용
  let answer = str.filter(function (v, i) {
    return str.indexOf(v) === i; // i 와 v의 인덱스가 같을 경우만 filter 메서드로 새로운 배열 반환
  });

  return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));