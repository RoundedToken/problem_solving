// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/

var canArrange = function (nums, k) {
  let map = {};

  for (let n of nums) {
    let mod = n % k;
    if (mod < 0) mod += k;

    let target = mod ? k - mod : 0;

    if (map[target]) map[target]--;
    else map[mod] = map[mod] + 1 || 1;
  }

  return Object.values(map).every((x) => x == 0);
};
