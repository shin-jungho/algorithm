// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length - 1; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target) {
//         return [i + 1, j + 1]
//       }
//     }
//   }
// };

var twoSum = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let currSum = nums[start] + nums[end];
    if(currSum > target) { 
      end-- 
    } else {
      if (currSum < target) {
        start++
      } else {
        return [start + 1, end + 1];
      }
    }
  }
};

let nums = [2, 7, 11, 15];
// let nums = [2, 3, 4];
let target = 9;

console.log(twoSum(nums, target));