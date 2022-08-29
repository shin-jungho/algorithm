// 1. 대문자 소문자 찾는법 -> 아스키코드사용 대문자: 65 ~ 90 소문자:97 ~ 122
// function solution(s){         
//   let answer=0;
//   for(let x of s) {
//     if(x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
//       answer++
//     }
//   }
//   return answer;
// }

// 2. 다른 코드 => toUpperCase사용해서 바뀌지 않는것 cnt++ 함
function solution(s){         
  let answer=0;
  for(let x of s) {
    if(x === x.toUpperCase()) answer++
  }
  return answer;
}
let s="KoreaTimeGood";

console.log(solution(s));