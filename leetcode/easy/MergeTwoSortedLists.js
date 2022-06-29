var mergeTwoLists = function(list1, list2) {
  let arr = list1.concat(list2);
  return arr.sort((a, b) => a - b);
};

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));