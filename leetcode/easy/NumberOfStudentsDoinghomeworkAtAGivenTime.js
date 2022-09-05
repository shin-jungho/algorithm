var busyStudent = function(startTime, endTime, queryTime) {
  let cnt = 0;  

  for (let i = 0; i < startTime.length; i++) {
    if(queryTime >= startTime[i] && queryTime <= endTime[i]) {
      cnt++;
    }
  }
  return cnt;
};

let startTime = [1, 2, 3];
let endTime = [3, 2, 7];
// let startTime = [4];
// let endTime = [4];
let queryTime = 5;

console.log(busyStudent(startTime, endTime, queryTime));