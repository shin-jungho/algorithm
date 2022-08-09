// var search = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// };

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  
  while(nums[mid] !== target && left <= right) {
    if(target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1
    }
    mid = Math.floor((left + right) / 2)
  }
  return nums[mid] === target ? mid : -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(search(nums, target));