// 소수 만들기
// 에라스토테네스의 체 이해필요, 다시풀어보기

function solution(nums) {
  var answer = 0;
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        // console.log(`${nums[i]} / ${nums[j]} / ${nums[k]}`);
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer += 1;
        }
      } 
    }
  }
  return answer;
}

let isPrime = (n) => {

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n >= 2;
} 

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));