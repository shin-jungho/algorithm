/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(s => s.split('').reverse().join('')).join(' ');
};

let s = "Let's take LeetCode contest";

console.log(reverseWords(s));