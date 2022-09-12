var sortByBits = function(arr) {
  let bits = arr.sort((a, b) => {
    let aCnt = a.toString(2).replaceAll('0', '').length
    let bCnt = b.toString(2).replaceAll('0', '').length

    if(aCnt === bCnt) return a - b;

    return aCnt - bCnt;
  })
  return arr;
};

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let arr = [1024,512,256,128,64,32,16,8,4,2,1]

console.log(sortByBits(arr));