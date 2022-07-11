// var strStr = function(haystack, needle) {
//   let needleLen = needle.length;

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       if (haystack.substring(i, i + needleLen) === needle) return i;
//     }
//   }
// };

var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle === haystack) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if(needle === haystack.substring(i, i + needle.length)) {
      return i
    }
  }

  return -1;
};

// let haystack = 'hello';
let haystack = 'aaaaa';
// let needle = 'll';
let needle = 'baa';

console.log(strStr(haystack, needle));