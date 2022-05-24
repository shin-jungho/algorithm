// 다트 게임 (다시풀기)

// 1. 다트게임 3번의 기회
// 2. 기회당 얻을 수 있는 점수 0 ~ 10
// 3. S = 1제곱, D = 2제곱, T = 3제곱 점수 1, 점수 2, 점수 3으로 계산
// 4. * = 스타상 => *2, 해당점수, 바로전에 얻은 점수 각 2배씩 / # = 아차상 => -1됨, 해당 점수 마이너스
// 5. * 처음에 나오면 이것만 2배
// 6. *는 중첩 가능 따라서 4배가됨
// 7. #, *중첩가능 따라서 -2배가됨
// 8. S, D, T 는 점수마다 하나씩 존재
// 9. *, #는 둘중 하나만 존재 or 존재하지 않을 수도 있음

// 0~10 처리?? i에 +1 하기
// dartResult분리 어떻게? match(), 정규표현식

function solution(dartResult) {
  var answer = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if(dartResult[i].match(/[0-9]/)) {
      // i+1 해야 0~10까지여서 
      if(dartResult[i]==='1' && dartResult[i + 1] === '0') {
        temp = 10;
        i++;
      }
      else temp = dartResult[i];
    }

    else if(dartResult[i] === 'S') {
      answer.push(Math.pow(temp, 1))
    }
    else if(dartResult[i] === 'D') {
      answer.push(Math.pow(temp, 2))
    }
    else if(dartResult[i] === 'T') {
      answer.push(Math.pow(temp, 3))
    }

    else if(dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }

    else if(dartResult[i] === '#') {
      answer[answer.length - 1] *= (-1);
    }
  }
  console.log(answer);
  return answer.reduce((a, b) => a + b);
}

// 문자열 토큰으로 나눠서 풀기




const dartResult = '1S2D*3T';

console.log(solution(dartResult));