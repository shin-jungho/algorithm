// 문자열 내 마음대로 정렬하기

//문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
//예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 입출력 예
//         strings	        n	        return
// ["sun", "bed", "car"]	| 1	| ["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]|	2	| ["abcd", "abce", "cdx"]

// 입출력 예 설명
//"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 
//이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.


// 1번째 작성 - 틀림
// function solution(strings, n) {
//   var answer = [];
//   let sortStr = strings.sort((a, b) => a[n] > b[n] ? 1 : -1)
//   return sortStr;
// }

// 2번째 작성
function solution(strings, n) {
  var answer = [];
  let sortStr = strings.sort((a, b) => {
    if(a[n] < b[n]) return -1; // a가 b보다 작을때  
    if(a[n] > b[n]) return 1; // a가 b보다 클때
    if(a[n] === b[n]) { // a가 b가 같을때 
      if(a < b) return -1; // 문자열 a, b 비교해서 오름차순 정렬
      if(a > b) return 1;
    }
  })
  return sortStr;
  }


console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));