function solution(arr){         
  let answer = [];
  // 인덱스 0은 비교할 앞 숫자가 없으므로 바로 푸시
  answer.push(arr[0]);
  // 인덱스 0은 푸시됬으므로 인덱스 1부터 arr.length까기 반복문
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i - 1]) { // 자신의 바로 앞 수보다 큰수 answer에 푸시
      answer.push(arr[i])
    }
  }
  return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));