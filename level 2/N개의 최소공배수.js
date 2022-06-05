// 유클리드 호제법 활용해서
// 유클리드 호제법을 이용하여 최대공약수를 구하고 최소공배수는 두수의 곱 / 최대공약수 이므로 이를 이용하여 문제를 해결

function gcd (a, b) {
  if (a % b === 0) {
    return b;
  } else { 
    return gcd(b, a % b);
  }
}
function solution(arr) {
  let a = arr[0];
  let b = 0;
  let lcm = 0;
  for (let i = 1; i < arr.length; i++) {
    b = arr[i];
    lcm = (a * b / gcd(a, b)> lcm ? (a * b / gcd(a, b)) : lcm
    a = lcm;
  }
  return lcm;
}