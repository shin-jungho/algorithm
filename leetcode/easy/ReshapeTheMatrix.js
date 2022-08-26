var matrixReshape = function(mat, r, c) {
  let arr = mat.flat() // [1, 2, 3, 4]
  let result = [];
  
  // 행렬을 만들지 못할 경우
  if(r * c != arr.length) return mat;

  // result 배열안에 arr 넣음
  while (arr.length) {
    result.push(arr.splice(0, c));
  }
  return result;
};

let mat = [[1, 2], [3, 4]], r = 2, c = 4;

console.log(matrixReshape(mat, r, c));