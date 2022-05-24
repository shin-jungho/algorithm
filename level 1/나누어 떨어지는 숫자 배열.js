// 나누어 떨어지는 숫자 배열

// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, div) {
  var answer = arr.filter((el) => el % div === 0);

  // 하나도 나누어 떨어지는게 없을때 [-1] return/ 있으면 정렬
  // answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b)
  
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b); 
}

// map 사용해서 문제풀이
function solution(arr, div) {
  var answer = [];
  arr.map((el) => {
    if (el % div === 0) {
      answer.push(el);
    }
  });

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}


console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));