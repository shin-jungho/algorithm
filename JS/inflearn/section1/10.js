function solution(s, t){
  let cnt = 0;
  // 문자열 돌면서 R과 같으면 cnt++ 해주면서 return
  for(let x of s) {
    if(x === t) {
      cnt++
    }
  }
  return cnt;
  
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));