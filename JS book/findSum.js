//* 배열 arr이 있고 어떤 수 weight가 주어졌을 때 합쳐서 weight가 되는 배열 내 항목 두개의 인덱스를 반환
// *만약 합쳐서 weight가 되는 항목 두 개가 존재하지 않는 경우 -1 반환

function findSum(arr, weight){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] == weight) {
        return [i, j]
      }
    }
  }
  return -1;
}

//* hash table 사용


let arr = [1, 2, 3, 4, 5];
let weight = 9;

console.log(findSum(arr, weight));