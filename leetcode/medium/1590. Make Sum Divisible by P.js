// https://leetcode.com/problems/make-sum-divisible-by-p/description/

var minSubarray = function (nums, p) {
  let sum = nums.reduce((accumulatore, currentValue) => accumulatore + currentValue, 0);
  let rem = sum % p;

  if (rem === 0) {
    return 0;
  }
  let prefix_map = new Map([[0, -1]]);
  let pref = 0,
    n = nums.length,
    t;
  let ans = n;
  for (let i = 0; i < n; i++) {
    pref += nums[i];
    t = (pref - rem) % p;
    if (prefix_map.has(t)) ans = Math.min(ans, i - prefix_map.get(t));
    prefix_map.set(pref % p, i);
  }
  return ans < n ? ans : -1;
};
