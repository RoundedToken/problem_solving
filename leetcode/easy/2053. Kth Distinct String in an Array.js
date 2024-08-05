// https://leetcode.com/problems/kth-distinct-string-in-an-array/description/

var kthDistinct = function (arr, k) {
  let freq = {};
  arr.forEach((s) => (freq[s] ? (freq[s] += 1) : (freq[s] = 1)));

  const distinct = [];

  for (let key in freq) {
    if (freq[key] == 1) {
      if (k == 1) return key;
      k--;
    }
  }

  return '';
};
