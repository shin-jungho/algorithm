// 1. 가장 쉬운 방법
function solution(s){         
  // let answer="";
  
  let answer = s.toUpperCase();

  return answer;
}

//
function solution(s){         
  let answer="";
  for(let x of s){

    // 2. 아스키 코드 소문자에서 32빼면 대문자가 됨, fromCharCode 사용해서 대문자로 바꾸기
      let num=x.charCodeAt();
      if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
      else answer+=x;

      // 3. 소문자면 대문자로 바꿔서 누적시키는 방법
      //if(x===x.toLowerCase()) answer+=x.toUpperCase();
      //else answer+=x;
  }

  return answer;

}

let str="ItisTimeToStudy";
console.log(solution(str));