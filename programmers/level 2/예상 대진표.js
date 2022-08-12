// 1. while문으로 a===b 될때까지 바복문 돌림
// 2. a ,b 이겨서 줄여나갈때마다 cnt++한뒤 
// 3. while문 끝날때 cnt return 하면될 듯

function solution(n, a, b) {
  var cnt = 1; // 1라운드 부터 시작이므로 1로 시작 0으로 하면 x
  let nextNum = (num) => Math.floor((num + 1) / 2); // 이겼을때 다음으로 가질 번호
  while (a !== b) { // a 다음 번호가 b 다음번호와 같아지면 끝남
    if (nextNum(a) === nextNum(b)) {
      break;
    }
    a = nextNum(a);
    b = nextNum(b);
    console.log('a, b : ', a, b);
    cnt++
  }
  return cnt;
}

let n = 8, a = 4, b =7;

console.log(solution(n, a, b));
