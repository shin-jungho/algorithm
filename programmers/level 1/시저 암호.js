// 시저 암호 *사람들 코드 보고 이해
// 아스키 코드 A~Z(65~90) , a~z(97~122)
// 문자열 -> 아스키코드 : s.charCodeAt()
// 아스키코드 -> 문자열 : String.fromCharCode()

function solution(s, n) {
  return s.split('').map(v => {
      if(v === ' ') return v;
      return v.toUpperCase().charCodeAt()+n > 90 ? String.fromCharCode(v.charCodeAt()+n-26) : String.fromCharCode(v.charCodeAt()+n)
  }).join('');
}

// let s = 'AB';
let s = 'a B z';
let n = 1;


console.log(solution(s, n));