function solution(record) {
  var answer = [];
  let recordObj = {};
  for(let i = 0; i <record.length; i++) {
    let id= record[i].split(' ')[1];
    let name= record[i].split(' ')[2];
    if(name) {
      recordObj[id] = name;
    }
  }

  for (let i = 0; i <record.length; i++) {
    let inAndOut = record[i].split(' ')[0];
    if(inAndOut === 'Enter') {
      answer.push(`${recordObj[record[i].split(' ')[1]]}님이 들어왔습니다.`);
    } else if(inAndOut === 'Leave') {
      answer.push(`${recordObj[record[i].split(' ')[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

// map으로 문제 풀어보기

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
console.log(solution(record));