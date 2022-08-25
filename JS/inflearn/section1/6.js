function solution(arr){
  let answer=[];
  let sort = [];
  let sum = 0;
  for (let odd of arr) {
    if(odd % 2 === 1) { // 홀수인 수 찾아내서 sum만들고 오름차순 정렬후 answer에 차례대로 push함
      sum = sum + odd;
      sort.push(odd);
      sort.sort((a, b) => a - b);
    }
  }
  answer.push(sum);
  answer.push(sort[0])

  return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));