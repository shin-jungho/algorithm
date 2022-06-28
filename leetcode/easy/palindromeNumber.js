var isPalindrome = function(x) {
  if (x < 0) {return false;}

  let reverseX = String(x).split('').reverse().join('');

  if (x == reverseX) {
    return true;
  } else {
    return false;
  }
};

let x = 10
console.log(isPalindrome(x))