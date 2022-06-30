var removeDuplicates = function(nums) {
  let sort = new Set(nums);
  let result = [...sort];
  console.log(result);
  return result.length;
};

// var removeDuplicates = function(nums) {
//   let visited = new Set();
//   let k = 0;
//   for(let i = 0; i < nums.length; i++){
//       if(visited.has(nums[i]) === false){
//           nums[k] = nums[i]
//           k++;
//           visited.add(nums[i]);
//       }
//   }
//   return k;
// };

// let nums = [1, 1, 2];
let nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums));