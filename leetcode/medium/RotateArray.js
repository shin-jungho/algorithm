// var rotate = function(nums, k) {
//   const spliced = nums.splice(nums.length - k, nums.length);
//   nums.unshift(...spliced);
  
//   return nums;
// };


var rotate = function(nums, k) {
  const len = nums.length;
  k %= len;
  // console.log(k %= len);
  
  const t = nums.splice(len - k, k);
  return nums.unshift(...t);
};

// let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
let nums = [-1, -100, 3, 99], k = 2;
// let nums = [1, 2], k = 5;

console.log(rotate(nums, k));