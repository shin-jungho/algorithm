// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

// >> 어떻게 사용해야될지...
// toString()
// 정규표현식x or filter

// 1차시도 시간 초과로 실패
// function solution(n) {
//   let bin = Number(n).toString(2); // 2진수로 변환
//   let binCnt = bin.match(/1/g).length; // 2진수로 바꾸고의 1의 개수

//   while (true) {
//     n += 1; // n 증가 시키면서 1의 개수 비교
//     let nextBin = Number(n).toString(2);
//     let nextBinCnt = nextBin.match(/1/.g).length;

//     if(binCnt === nextBinCnt) {
//       break;
//     }
//   }

//   return n;
// }

// 2차 시도

function solution(n) {
  var answer = n;
  let binCnt = n.toString(2).match(/1/g).length;
  while (true) {
    answer++
    let nextBinCnt = answer.toString(2).match(/1/g).length; // n으로 하면 통과 x (answer)로 해야됨 왜?
    if(binCnt === nextBinCnt) {
      break;
    }
  }

  return answer;
}
console.log(solution(78));