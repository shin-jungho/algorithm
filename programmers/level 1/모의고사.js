// 모의고사

function solution(answers) {
  let answer = [];
  let cntScore = [];

  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 맞힌 문제 개수만큼 cntScore에 push 
  // s1[i % s1.length]이부분 다시 생각
  cntScore.push(answers.filter((s, i) => s === s1[i % s1.length]).length);
  cntScore.push(answers.filter((s, i) => s === s2[i % s2.length]).length);
  cntScore.push(answers.filter((s, i) => s === s3[i % s3.length]).length);
  
  // console.log(cntScore);

  for (let i = 0; i < cntScore.length; i++) {
    const maxScore = Math.max(...cntScore);
    if(maxScore === cntScore[i]) {
      answer.push(i + 1); // 최고점인 사람 answer배열에 push
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));