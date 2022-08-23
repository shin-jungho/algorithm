var containsDuplicate = function(nums) {
  
  let sortNums = nums.sort((a, b) => a - b);
  
  for (let i = 0; i < sortNums.length; i++) {
    if(sortNums[i] === sortNums[i + 1]) {
      return true; 
    }

    return false;
  }
};

// let nums = [1, 2, 3, 1];
let nums = [1, 2, 3, 4];

console.log(containsDuplicate(nums));