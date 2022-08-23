var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums [i - 1]);
  };

  return Math.max(...nums);
};

// let nums = [-2,1,-3,4,-1,2,1,-5,4]
let nums = [-2, 1];


console.log(maxSubArray(nums));
