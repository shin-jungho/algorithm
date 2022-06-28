// 예산
function solution(d, budget) {
  let sum = 0;
  let count = 0;

  d.sort((a, b) => a - b); // 작은 것 부터 더하기

  for(let i = 0; i < d.length; i++) { 
    sum += d[i];
    if(sum > budget) { return count; } // 밑으로 내리면 더해서 결과값 나옴
      count++;
    
  }

  return count;
}

console.log(solution([2, 2, 3, 3], 10));