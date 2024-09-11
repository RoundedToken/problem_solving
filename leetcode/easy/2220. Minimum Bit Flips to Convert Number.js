// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/

var minBitFlips = function (n, p) {
  let count = 0;
  while (p != 0 || n != 0) {
    let d = p & 1;
    let f = n & 1;
    if (d != f) {
      count++;
    }
    n = n >> 1;
    p = p >> 1;
  }
  return count;
};
