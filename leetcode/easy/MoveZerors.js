// var moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] != 0) {
//       nums[j] = nums[i];
//       j++;
//       console.log('j', nums[j]);
//     } 
//   };

//   for(let i = j; i < nums.length; i++) {
//     nums[i] = 0;
//   }

//   return nums;
// }

// var moveZeroes = function(nums) {
//   for(let i = 0; i < nums.length - 1; i++) {
//     if(nums[i] === 0) {
//       nums.splice(i, 1);
//       console.log('nums :', nums);
//       nums.push(0);
//     }
//   }
//   return nums;
// }

var moveZeroes = function(nums) {
  for(let i = nums.length - 1; i >= 0; i--){
      if(!nums[i]){
          nums.splice(i,1);
          nums.push(0);
      }
  }
  return nums;
};

// let nums = [0, 1, 0, 3, 12];
let nums = [0, 0, 1];

console.log(moveZeroes(nums))