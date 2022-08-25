// arr에 있는 값들을 10으로 나누고 나머지값이 day랑 같으면 answer++ 해서 문제 풀이
function solution(day, arr){
  let answer=0;
  
  for (let x of arr) {
    if(x % 10 === day) { 
      answer++
    }
  }
  return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));