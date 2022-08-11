// function solution(s) {
//   let sArr = s.split('');
//   // console.log(sArr);
//   let start = 0;
//   let end = sArr.length - 1;

//   while (start < end) {
//     if(sArr[start] !== sArr[start + 1]) {
//       start++
//     } if (sArr[start] === sArr[start + 1]) {
//       sArr.splice(start, start + 1);
//       start = 0;
//     }
//     console.log('sArr : ', sArr);
//   }
//   if (sArr === []) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function solution(s) {
//   let arr = [];
//   for(let i = 0; i < s.length; i++) {
//     arr.push(s[i]);
//     // arr[arr.length - 1] -> 마지막 요소에 접근
//     if(arr[arr.length - 1] === arr[arr.length - 2]) {
//       arr.pop();
//       arr.pop();
//     }
//   }
//   return arr.join('') === '' ? 1 : 0;
// }

function solution(s) {
  let arr = [];
  for(let i = 0; i < s.length; i++) {
    console.log('arr: ', arr.length);
    // arr 마지막 요소와 s의 index 비교해서 다르면 push로 arr에 넣고 같으면 arr에서 빼는 것
    if(arr[arr.length - 1] !== s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }
  return arr.join('') === '' ? 1 : 0;
}

let s = 'baabaa';

console.log(solution(s));
