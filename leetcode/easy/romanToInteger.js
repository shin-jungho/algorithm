var romanToInt = function(s) {
  let result = 0;
  let value = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  }

  for(let i = 0; i < s.length; i++) {
    let current = value[s[i]]; // s문자열에서 value 값 비교해서 작으면 다음 숫자에서 현재 숫자 뺌
    let next = value[s[i + 1]];

    if(current < next) {
      result += next - current;
      i++; 
    } else {
      result += current;
    }
  }
  return result;
};

// let s = 'LVIII'
// let s = 'III'
let s = 'MCMXCIV'

console.log(romanToInt(s));