// 유클리드 호제법
const gcd = (w, h) => {
  
  // w, h의 나머지 구함
  const mod = w % h;

  // 나머지가 0일 경우 h반환
  if(mod === 0) {
    return h;
  }

  // 만약 0이 아닐경우 w에 h를 넣고 h에 나머지인 mod를 넣어 해당 함수를 다시 호출
  return gcd(h, mod);
}

function solution(w, h) {
  const gcdVal = gcd(w, h);
  return w * h - (w + h - gcdVal);
}

let w = 8, h = 12;

console.log(solution(w, h));



// 가로 개수 + 세로 개수 - (가로, 세로 최대공약수)로 문제풀이
