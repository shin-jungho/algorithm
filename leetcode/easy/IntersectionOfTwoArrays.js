// var intersect = function(nums1, nums2) {
//   let output = nums1.filter(x => nums2.includes(x));

  // let answer = new Set(output);
  // return answer;

//   return new Set(output);
// };

var intersect = function(nums1, nums2) {
  let output = [];

  for (let i = 0; i < nums2.length; i++) {
    if(nums1.includes(nums2[i])) {
      output.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }

  return output;
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];

console.log(intersect(nums1, nums2));