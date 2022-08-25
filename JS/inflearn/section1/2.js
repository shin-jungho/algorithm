// 가장 큰 변이 두 변보다 작아야 삼각형 성립이됨
function solution(a, b, c){
  let answer="YES", max;
  // a, b, c 더해서 가장 큰값이 max를 빼서 max보다 작거나 같으면 NO가 나오게한다 
  let sum = a + b + c

  if(a > b) max = a;
  else max = b;
  if(c > max) max = c;

  if((sum - max) <= max) answer='NO';

  return answer;
}

console.log(solution(13, 33, 17));
