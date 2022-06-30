function solution(progresses, speeds) {
  // 각 배포마다 배포되는 기능수 push할 answer
  var answer = [];
  let days = 1; // 배포일
  let cnt = 0; // 배포된느 기능수
  let progress = 0; // 진행속도
  // 작업 배포될때까지 while문
  while (progresses[0]) {
    let progress = progresses[0] + (speeds[0] * days);
    if(progress >= 100) {
      //배포완료 기능 개수 추가
      cnt++;
      //배포완료된 기능, 속도 제거
      progresses.shift();
      speeds.shift();
    } else {
      // 배포완료된 기능이 있을때 answer에 push
      if(cnt > 0) {
        answer.push(cnt);
      }
      // 다음날 배포일 증가
      days++;
      //기능 개수 초기화
      cnt = 0;
    }
  }
  // 마지막으로 카운트된 배포완료기능 개수 push
  answer.push(cnt);

  return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

console.log(solution(progresses, speeds));