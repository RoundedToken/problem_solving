// https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description/

var longestCommonPrefix = function (arr1, arr2) {
  const pre1 = new Set();
  for (const num of arr1) {
    const s = num.toString();
    let cur = '';
    for (const c of [...s]) {
      cur += c;
      pre1.add(cur);
    }
  }
  let ans = 0;
  for (const num of arr2) {
    const s2 = num.toString();
    let cur = '';
    for (const c of [...s2]) {
      cur += c;
      if (pre1.has(cur)) {
        ans = Math.max(ans, cur.length);
      }
    }
  }
  return ans;
};
