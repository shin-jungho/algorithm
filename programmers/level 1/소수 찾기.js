// 소수 찾기
// 에라스토테네스의 체로 하는 이유? 
//* 예를들어 n에 1만개 넣을경우 효율성이 낮아지므로 제곱근을 통해 소수 구하는게 더 효율적이여서
// 소수 만들기와 개념 비슷

// n	|result
// 10	|  4
// 5	|  3

function isPrime(x) {
  for(let i = 2; i <= Math.sqrt(x); i++){
    if(x % i ===0) return false;
  }
  return true;
}

function solution(n) {
  var answer = 0;
  // 1은 소수가 아니므로 2부터 n까지 모든수 순회
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      // 소수면 answer에 +1
      answer++;
    }
  }
  return answer;
}

console.log(solution(10));
console.log(solution(4));