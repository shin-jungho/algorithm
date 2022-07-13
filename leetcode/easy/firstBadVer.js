// 이진 탐색으로 문제

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 0;
    let end = n;
    while(start < end) {
      let mid = Math.floor((start + end) / 2);
      let test = isBadVersion(mid);
      test === false ? start = mid + 1 : end = mid;
    }
    return end;
  };
};
