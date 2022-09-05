// 학생 = queue, sandwiches = stack

var countStudents = function(students, sandwiches) {
  let removeCnt = 0;
  while(sandwiches.length > 0){
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      removeCnt = 0
      console.log(students, sandwiches);
    } else {
      students.push(students.shift())
      removeCnt++
      if (removeCnt === students.length) {
        break;
      }
    }
  }
  return students.length;
};

// var countStudents = function(students, sandwiches) {
//   let cnt = 0;
//   while (students.length !==0) {
//     let curr = students.shift();

//     if(curr === sandwiches[0]) {
//       sandwiches.shift();
//       cnt = 0;
//     } else {
//       students.push(curr);
//       if(students.length < cnt) break;
//     }
//     cnt++
//   }

//   return students.length;
// };


let students = [1, 1, 0, 0];
let sandwiches = [0, 1, 0, 1];
// let students = [1,1,1,0,0,1];
// let sandwiches = [1,0,0,0,1,1];

console.log(countStudents(students, sandwiches));