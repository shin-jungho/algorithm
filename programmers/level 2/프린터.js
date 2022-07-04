function solution(priorities, location) {
  var answer = 0;

  while (true) {
    let max = Math.max(...priorities);
    let shift = priorities.shift(); // shift로 맨 앞 요소 뺀다.

    if(shift === max) { // 꺼낸 요소가 max와 같으면 pop하므로 answer +1 증가
      answer++;
      if(location === 0) { // 만약 location이 0이되면
        return answer; // answer를 return
      }
    } else { // 꺼낸요소가 max와 다를때
      priorities.push(shift); // 배열 맨 끝에 꺼낸 요소 추가
    }
    location--; // if문 할때마다 location값 계속 줄여나감

    if (location == -1) { // location이 -1이 되면 다시 배열 맨 끝으로 보냄
      location = priorities.length - 1;
    }
  }
}

let priorities = [2, 1, 3, 2]
let location = 2

console.log(solution(priorities, location));