// 집합 사용해서 배열 중복 확인

function checkDuplicate(arr) {
  let mySet = new Set(arr);

  return mySet.size < arr.length
}


// let arr = [1, 2, 3, 4, 5];
let arr = [1, 1, 2, 3, 4, 5];

console.log(checkDuplicate(arr));