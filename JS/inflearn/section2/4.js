function solution(arr){         
  let answer=0, cnt=0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // 1일때 cnt++ 후 answer에 cnt 더한후 return
      cnt++
      answer += cnt;
    } else {
      // 0점일때는 cnt = 0으로 초기화
      cnt = 0;
    }
  }
  return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));