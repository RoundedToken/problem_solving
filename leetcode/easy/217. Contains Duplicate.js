// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
    const set = new Set(nums);
    return !(set.size === nums.length);
};
