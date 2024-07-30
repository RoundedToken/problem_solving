// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/

var minimumDeletions = function (s) {
  let count = 0;
  let prefix = 0;
  for (let st of s) {
    if (st === 'b') {
      prefix++;
    } else if (st === 'a' && prefix > 0) {
      prefix--;
      count++;
    }
  }
  return count;
};
