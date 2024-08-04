// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description/

var rangeSum = function (nums, n, left, right) {
  let subArr = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      subArr.push(sum);
    }
  }
  subArr.sort((a, b) => a - b);
  let result = 0;
  const MOD = 10 ** 9 + 7;
  for (let k = left - 1; k < right; k++) {
    result = (result + subArr[k]) % MOD;
  }
  return result;
};
