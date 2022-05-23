// 폰켓몬 

// new Set으로 중복 없애고 [...new set()]; 하면 배열로 바뀜
function solution(nums) {

  let selectMax = nums.length / 2;

  let setNums = [...new Set(nums)];


  return setNums.length > selectMax ? selectMax : setNums.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));