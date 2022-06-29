//* stack으로 풀 수 있는 문제

var isValid = function(s) {
  const map = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  };

  const stack = [];
  const open = Object.keys(map); // map의 key값들

  // 짝수가 아니면 false
  if (s.length % 2 !== 0) return false;

  for (let x of s) {
    // object의 키값과 value값을 비교
    if(open.includes(x)) {
      stack.push(x);
    } else {
      if(map[stack[stack.length - 1]] === x) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};

let s = '()'
console.log(isValid(s));