// var middleNode = function(head) {
//   let start = 0;
//   let end = head.length - 1;
//   let midNode = Math.floor((start + end + 1) / 2);

//   // console.log(start, end, midNode);
//   return head.splice(midNode, end);
// };

var middleNode = function(head) {
  slow = fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};

let head = [1, 2, 3, 4, 5];
// let head = [1, 2, 3, 4, 5, 6];

console.log(middleNode(head));
