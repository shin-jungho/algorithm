// 1. 선형 검색
// function sqrtInt(number) {
//   if (number === 0 || number === 1) {
//     return number;
//   }
//   let index = 1;
//   let square = 1;

//   while (square < number) {
//     if (square == number) {
//       return square;
//     }

//     index++;
//     square = index * index;
//   }

//   return index;
// }

// 2. 이진 검색 
function sqrtInt(number) {
  if (number === 0 || number === 1) {
    return number;
  }
  let start = 1;
  let end = number;
  let ans;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // console.log('mid: ', mid);
    if (mid * mid == number) {
      return mid;
    }
    if(mid * mid < number){
      start = mid + 1;
      ans = mid
      // console.log('mid: ', mid);
    } else {
      end = mid - 1;
      // console.log('end : ',end);
    }
  }
  return ans;
}



console.log(sqrtInt(9));
