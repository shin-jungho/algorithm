// 나머지가 1이 되는 수 찾기

function solution(n) {
  var answer = 0;

  for (let i = 1; i < n; i++) {
    if(n % i === 1) {
      return i
    }
  };
}

console.log(solution(10));