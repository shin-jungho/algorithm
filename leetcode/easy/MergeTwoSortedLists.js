//* linked list로 푸는 문제

// var mergeTwoLists = function(list1, list2) {
//   let arr = list1.concat(list2);
//   return arr.sort((a, b) => a - b);
// };

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    // l1, l2 모두 null이 아닐 때까지 반복
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    list = list.next;
  }

  list.next = l1 || l2; // l1, l2 중에 값이 비교되지 않은 노드가 남아있을 수 있다. 따라서 현재 null을 가리키고 있는 리스트(모두 검사 완료)말고 다른 리스트의 노드를 이어주어야한다.

  return head.next;
};

// let list1 = [1, 2, 4];
// let list2 = [1, 3, 4];

let list1 = []
let list2 = [0]

console.log(mergeTwoLists(list1, list2));