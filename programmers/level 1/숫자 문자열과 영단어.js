// 숫자 문자열과 영단어

// split, join으로 문제풀기 

function solution(s) {
  var answer = 0;
  let stringToNum = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  for (let i = 0; i < 10; i++) {
    s = s.split(stringToNum[i]).join(i);
  }

  return Number(s); //Number, parseInt 둘다 가능
}

// replace로 문제 풀기

function solution(s) {
  s = s.replace(/zero/gi, 0)
  .replace(/one/gi, 1)
  .replace(/two/gi, 2)
  .replace(/three/gi, 3)
  .replace(/four/gi, 4)
  .replace(/five/gi, 5)
  .replace(/six/gi, 6)
  .replace(/seven/gi, 7)
  .replace(/eight/gi, 8)
  .replace(/nine/gi, 9)
  return parseInt(s);
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));