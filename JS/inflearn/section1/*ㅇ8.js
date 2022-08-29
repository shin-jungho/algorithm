// 일곱 난쟁이 문제 다시
function solution(arr){
  let answer=arr;
  let sum = answer.reduce((a, b) => a + b);
  for(let i = 0; i< 8; i++) {
    for(let j = i + 1; j < 9; j++) {
      // arr 전체 합에서 answer 두개를 합친값을 빼서 100이 나오면 난쟁이가 아니라는 코드
      if(sum-(answer[i] + answer[j]) === 100){
        // 앞에부터 자르면 다음 자르는것이 이상해짐
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  
  return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));