// 약수의 합
// 배열로 풀어서 런타임 에러남

function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
      if(n % i === 0) {
        answer.push(i)
      }
    }

  let result = answer.reduce((a, b) => {return a + b});

  return result;
}
// {a + b} 하면 undefinded 뜨는이유??? return 값이 없어서 / a + b or {return a + b} 써야함

console.log(solution(12));