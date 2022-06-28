// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target) {
//         return [i ,j];
//       }
//     }
//   }
// };

//* 시간 복잡도 좋은경우 hash, dictionary 사용해서 시간복잡도 줄이기
var twoSum = function(nums, target) {
  var map = {};
  for(var i = 0 ; i < nums.length ; i++){
      var n = nums[i];

      if(map[target-n] >= 0){
        console.log(map[target-n], i);
          return [map[target-n],i]
      } 
      else {
          map[n] = i;   //use map to store the value and index position
      }
  }
};

let nums = [2, 11, 7, 15];
let target = 9;

console.log(twoSum(nums, target));