// 부족한 금액 계산하기 - 등차수열로 풀 수 있음

function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return (sum < money) ? 0 : sum - money;

}

console.log(solution(3, 20, 4));