// https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function (nums, index) {
    const result = [];
    for (const ind in nums) {
        result.splice(index[ind], 0, nums[ind]);
    }
    return result;
};
