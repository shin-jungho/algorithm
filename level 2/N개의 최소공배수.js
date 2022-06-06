// 유클리드 호제법 활용해서
// 유클리드 호제법을 이용하여 최대공약수를 구하고 최소공배수는 (두수의 곱 / 최대공약수) 이므로 이를 이용하여 문제를 해결

// 틀림
// function gcd (a, b) {
//   if (a % b === 0) {
//     return b;
//   } else { 
//     return gcd(b, a % b);
//   }
// }
// function solution(arr) {
//   let a = arr[0];
//   let b = 0;
//   let lcm = 0;
//   for (let i = 1; i < arr.length; i++) {
//     b = arr[i];
//     lcm = (a * b / gcd(a, b)> lcm ? (a * b / gcd(a, b)) : lcm
//     a = lcm;
//   }
//   return lcm;
// }

// 2번째

function gcd(a, b) {
  if(a === 0) return b;
  return gcd (b % a, a);
}

function lcm(a, b) {
  return (a * b / gcd(a, b));
}

function solution(arr) {
  let result = 1;
  
  for (let i = 0; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }

  return result;
}

// 다른 사람 코드

// function solution(arr) {
//   let gcd = (a, b) => a%b===0 ? b : gcd(b, a%b);
//   return arr.reduce((a, b) => a * b / gcd(a, b));
// }

//* reduce함수를 통해 배열을 순차적으로 돌면서 계산해주면 최소공배수가 나옴
let arr = [2, 6, 8, 14];

console.log(solution(arr));