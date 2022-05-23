// 최대공약수 최대공배수 **다시풀기

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// 유클리드 호제법 공부

function solution(n, m) {
  let gcd = 0;
  let lcm = 0;

  if(n % m === 0 || m % n === 0) {
    gcd = Math.min(n , m);
    lcm = Math.max(n , m);
  } else {
    for(let i = 0; i < Math.max(n, m); i++){
      if (n % i === 0 && m % i === 0) {
        gcd = i;
      } 
      lcm = (n * m) / gcd;
    }

  }

  return [gcd, lcm];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
console.log(solution(44, 121));