// 1. upper이면 lower로 바꾸는 방식 ascii 코드로 해보기
var solution = (str) => {
  let answer = '';

  for(let x of str) {
    if(x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else answer += x.toUpperCase();
  }
  return answer;
}

let str = 'StuDY';
console.log(solution(str));