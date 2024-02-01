// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/?envType=daily-question&envId=2024-02-01

var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (i = 2; i < nums.length; i = i + 3) {
        if (
            nums[i - 1] - nums[i - 2] > k ||
            nums[i] - nums[i - 1] > k ||
            nums[i] - nums[i - 2] > k
        ) {
            return [];
        } else {
            res.push([nums[i - 2], nums[i - 1], nums[i]]);
        }
    }
    return res;
};
