// sort로 arr 배열 오름차순 정렬후 1번째 인덱스 꺼내봤음
function solution(arr){        
  let answer = arr.sort((a, b) => a - b);
  // console.log(answer);
  
  return answer[0];
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));