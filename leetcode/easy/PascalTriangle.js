// var generate = function(numRows) {
//   if (numRows == 1) return [1];
//   if (numRows == 2) return 

//   let result = [[1], [1, 1]];
//   for (let i = 2; i < numRows; i++) {
//     let arr = [i];
//     let prev = result[i - 1];
//     for(let j = 0; j < prev.length - 1; j++) {
//       arr.push(prev[j] + prev[j + 1]);
//     }
//     arr.push(1);
//     result.push(arr);
//   }

//   return result;
// };

var generate = function(numRows) {
  let res = [[1]];
  
  while(numRows > 1) {
      let previous = res[res.length - 1];
      // The first row element is always 1.
      let cur = [1];
      for (let i = 1; i < previous.length; i++) {
          // generate: sum of the elements above-and-to-the-left and above-and-to-the-right.
          cur.push(previous[i - 1] + previous[i]);
      }
      // The last row element is always 1.
      cur.push(1);
      res.push(cur.concat());
      numRows--;
  }
  return res;
};

let numRows = 5;

console.log(generate(numRows));