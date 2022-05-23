// 같은 숫자는 싫음
// filter((현재요소, 배열 인덱스) => ~~~)
// new Set 쓰면 1, 3, 0 으로 나옴

function solution(arr) {
  let remove = arr.filter((e, i) => e !== arr[i + 1]);
  // console.log(remove);
  return remove;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // 1, 3, 0, 1
console.log(solution([4, 4, 4, 3, 3]));
