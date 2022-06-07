// 1, 2, 4 / 5, 4, 4
// A 오름차순, B 내림차순으로 곱하고 더하면 최솟값됨
function solution(A,B){
  var answer = 0;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

// reduce 사용 

function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
    // 초기값 0으로 하고 A값 B[idx]값 곱한거 return
}

let A = [1, 4, 2];
let B = [5, 4, 4];

console.log(solution(A, B));