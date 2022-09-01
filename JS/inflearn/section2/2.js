function solution(arr){         
  let answer = 1, temp = [0];  // 비교해야되므로 temp만들어서 비교
  for (let i = 1; i < arr.length; i++) {
    // arr 인덱스와 temp를 arr가 크면 temp를 arr[i]로 초기화
    if(arr[i] > temp) {
      answer++;
      temp = arr[i];
    }
  }
  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));