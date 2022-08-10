// map, sort로 풀이
// var sortedSquares = function(nums) {
//   const squareNums = nums.map(x => x * x);

//   squareNums.sort((a, b) => a - b);
//   return squareNums;
// };

// // let nums = [-4, -1, 0, 3, 10];

// two pointer로 문제 풀이
var sortedSquares = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let i = 2 * end;
  while(start <= end) {
      if(nums[start] ** 2 > nums[end] ** 2) {
          nums[i--] = nums[start++] ** 2;
      } else {
          nums[i--] = nums[end--] ** 2;
      }
  }
  return nums.slice(i+1);
};
let nums = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums));