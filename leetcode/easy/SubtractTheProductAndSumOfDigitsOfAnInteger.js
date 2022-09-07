var subtractProductAndSum = function(n) {
  const digits = Array.from(String(n), Number);
  // console.log(digits);
  
  const sum = digits.reduce((a, b) => a + b);
  const product = digits.reduce((a, b) => a * b);

  return product - sum;
  
};

// let n = 234;
let n = 4421;
console.log(subtractProductAndSum(n));