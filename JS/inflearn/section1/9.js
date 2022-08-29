// function solution(s){
//   let answer="";
//   for(let x of s) {
//     if(x === 'A') {
//       answer = s.replace(/A/g, '#');
//     }
//   }
//   return answer;
// }

// for문 삭제하는게 더 좋은거같다.
function solution(s){  
  // replace 메서드안에 정규표현식을 사용해 /A/g => s안에 모든 A를 #으로 바꾸게한다.
  let answer = s.replace(/A/g, '#');

  return answer;
}

let str="BANANA";
console.log(solution(str));