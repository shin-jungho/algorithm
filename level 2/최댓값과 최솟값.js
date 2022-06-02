function solution(s) {
  var answer = [];
  let sArr = s.split(' ');
  let max = Math.max(...sArr);
  let min = Math.min(...sArr);

  answer.push(min);
  answer.push(max);
  // console.log(max, min);
  return answer.join(' ');
}

let s1 = '1 2 3 4';
let s2 = "-1 -2 -3 -4";
let s3 = "-1 -1"	;
console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));