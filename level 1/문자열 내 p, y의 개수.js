// 문자열 내 p,y 의 개수
// match 메소드는 p, y 없을 때 undefined로 되므로 런타임 에러난다

function solution(s){
  let lowerS = s.toLowerCase();
  let searchP = lowerS.split('p').length;
  let searchY = lowerS.split('y').length;

  return searchP === searchY ? true : false;
  
}

console.log(`Pyy: ${solution('Pyy')}`);
console.log(`pPoooyY: ${solution('pPoooyY')}`);
