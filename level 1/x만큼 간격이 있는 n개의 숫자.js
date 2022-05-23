// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  var answer = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = x * i;
    answer.push(sum);
  }
  return answer;
}

console.log(solution(4, 5));
