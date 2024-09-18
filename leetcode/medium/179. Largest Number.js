// https://leetcode.com/problems/largest-number/description/

var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let sa = a.toString();
    let sb = b.toString();
    return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1;
  });
  if (nums[0] === 0) return '0';

  return nums.join('');
};
