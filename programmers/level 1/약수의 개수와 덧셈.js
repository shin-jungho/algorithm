// 약수의 개수와 덧셈

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) { // 주어진 숫자 범위 순회
    let count = 0;
    for(let j = 0; j <= i; j++){ // 주어진 숫자 약수 개수 카운트
      if(i % j ===0) {
        count += 1;
      }
    }
    answer = count % 2 === 0 ? answer += i : answer -= i;
  }
  return answer;
}

// 다른 사람 풀이

function solution(left, right) { // 8???
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
console.log(solution(2, 8));