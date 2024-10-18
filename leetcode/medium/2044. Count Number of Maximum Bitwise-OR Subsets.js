// https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/description/

var countMaxOrSubsets = function (nums) {
  let size = nums.length;
  let maxBitwise = nums.reduce((res, val) => res | val, 0);
  let res = 0;

  function findMaxBitSubset(i = 0, current = 0) {
    if (i >= size) {
      if (current === maxBitwise) res += 1;
      return;
    }
    findMaxBitSubset(i + 1, current);
    findMaxBitSubset(i + 1, current | nums[i]);
  }
  findMaxBitSubset();
  return res;
};
