// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/

var minSwaps = function (s) {
  var mismatch = 0;
  var cnt = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      cnt--;
    } else {
      cnt++;
    }
    if (cnt < 0) {
      mismatch = Math.min(mismatch, cnt);
    }
  }
  return Math.ceil(-mismatch / 2);
};
