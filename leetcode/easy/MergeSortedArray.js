// var merge = function(nums1, m, nums2, n) {
//   let num1Splice = nums1.splice(0, m);
//   let num2Splice = nums2.splice(0, n)

  
//   let arr = [...num1Splice, ...num2Splice]
//   console.log('num1Splice, num2Splice :', num1Splice, num2Splice);
//   return arr.sort((a, b) => a - b)
// };

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);

  return nums1;
} 

// let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
// let nums2 = [2, 5, 6], n = 3;

let nums1 = [0], m = 0;
let nums2 = [1], n = 1;

console.log(merge(nums1, m, nums2, n));