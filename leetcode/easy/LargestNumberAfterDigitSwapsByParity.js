// var largestInteger = function(num) {
//   let nums = num.toString().split('');
//   let odd = [];
//   let even = [];
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] % 2 === 0) {
//       even.push(nums[i]);
//     } else {
//       odd.push(nums[i]);
//     }
//   }
//   odd.sort((a, b) => a - b);
//   even.sort((a, b) => a - b);
//   console.log(odd, even);
  
//   let answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     if(num[i] % 2 === 0) {
//       answer.push(even[i - 1]);
//       console.log(even);
//       even.pop();
//     } else {
//       answer.push(odd.length - 1);
//       odd.pop();
//     }
//   }

// return parseInt(answer.join(''));
// };

var largestInteger = function(num) {
  const odd = [];
  const even = [];
  const nums = String(num).split('')
  
  for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 0) even.push(parseInt(nums[i]))
      else odd.push(parseInt(nums[i]))
  }
  
  odd.sort((a,b) => a-b)
  even.sort((a,b) => a-b)
  
  const answer = [];
  for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 0) answer.push(even.pop())
      else answer.push(odd.pop())
  }

  return answer.join('')
};

let num = 1234;
console.log(largestInteger(num));