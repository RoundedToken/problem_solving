// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/?envType=daily-question&envId=2024-05-02

var findMaxK = function (nums) {
    result = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(-nums[i], i + 1) > 0) if (Math.abs(nums[i]) > result) result = Math.abs(nums[i]);
    }

    return result;
};
