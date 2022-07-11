//* 이분 탐색이용해서 O(logN)가질수 있음

// var searchInsert = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
// };

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (nums[mid] !== target && left <= right) {
    if(target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  // 같아서 while문이 끝난거면 middle, 달라서 마지막에 끝난거면 left의 값을 return한다.
  return nums[mid] === target ? mid : left;
};



let nums = [1, 3, 5, 6];
let target = 7;

console.log(searchInsert(nums, target));