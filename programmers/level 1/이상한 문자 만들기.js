// 이상한 문자 만들기
// toUpperCase(), toLowerCase()는 배열에서 사용 x

function solution(s) {

return s.split(' ').map((el) => el.split('')
        .map((el, index) => 
          index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
        )
        .join('')
        )
      .join(' ');
}
// let s = "try hello world"	
// let arr = s.split(' ').map((el) => el.split(''));
console.log(solution("try hello world"));