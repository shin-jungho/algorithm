// ex) '17' => return = 3 [7, 17, 71]
// ex) '011' => return = 2 [11, 101]
//* 그래프 알고리즘 DFS개념 다시풀기

// 소수 판별 함수
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) return false; 
  }
  return true;
}

// 그래프 알고리즘
function dfs(set, arr, fixed) { // arr = numbers Arr
  if(arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newFixed = fixed + arr[i];
      let copyArr = [...arr];
      copyArr.splice(i, 1);

      if (isPrime(parseInt(newFixed))) {
        set.add(parseInt(newFixed));
      }
      dfs(set, copyArr, newFixed);
    }
  }
}

function solution(numbers) {
  var answer = 0;
  let nums = numbers.split('');
  let set = new Set();

  dfs(set, nums, '');
  
  console.log(set);

  return set.size;
}

console.log(solution('17'));