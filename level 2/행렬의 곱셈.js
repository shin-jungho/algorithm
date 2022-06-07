
function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // 행렬 arr1의 접근
    const row = arr1[i];
    answer.push([]);
    // 행렬 arr2의 열 길이
    for(let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      // arr2의 행 길이
      for(let k = 0; k < arr2.length; k++) {
        sum += row[k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}


// const a = new Array("3") // ["3"]
// const b = new Array(3) // [empty x 3]
// const c = ["3"] // ["3"]
// const d = [3] // [3]

let arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	
let arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]	

console.log(solution(arr1, arr2));