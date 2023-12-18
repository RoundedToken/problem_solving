// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/?envType=daily-question&envId=2023-12-18

var maxProductDifference = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let l = nums.length;
    return nums[l - 1] * nums[l - 2] - nums[0] * nums[1];
};
