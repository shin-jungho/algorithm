function solution(a, b, c){
  let min = 0;
  if(a < b) {
    min = a
  } else {
    min = b
  }

  if (min > c)  min = c;
  else return min
  
  return min;
}

console.log(solution(2, 5, 1));