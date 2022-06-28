var addTwoNumbers = function(l1, l2) {
  let reverseL1 = String(l1).split(',').reverse().join('');
  let reverseL2 = String(l2).split(',').reverse().join('');
  let sum = Number(reverseL1) + Number(reverseL2)
  return String(sum).split('').reverse();
};

let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];
let l2 = [9, 9, 9, 9];


// console.log(l1.join('').reverse())

//* string.prototype.split()
//* Array.prototype.reverse()
//* Array.prototype.join()

console.log(addTwoNumbers(l1, l2));