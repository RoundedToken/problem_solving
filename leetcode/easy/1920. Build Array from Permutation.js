// https://leetcode.com/problems/build-array-from-permutation/

var buildArray = function (nums) {
    return nums.map((v, i) => nums[nums[i]]);
};
