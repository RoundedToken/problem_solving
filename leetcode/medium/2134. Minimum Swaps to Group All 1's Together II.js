// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/description/?envType=daily-question&envId=2024-08-02

var minSwaps = function (nums) {
  let n = nums.length;
  let x = nums.reduce((x, e) => x + e, 0);

  let max = -Infinity,
    y = 0;
  for (let z = 0, a = -x; z < n + x; z++, a++) {
    y += nums[z % n];
    if (a >= 0) {
      y -= nums[a % n];
    }
    max = Math.max(max, y);
  }
  return x - max;
};
