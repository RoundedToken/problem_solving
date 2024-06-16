// https://leetcode.com/problems/patching-array/description/?envType=daily-question&envId=2024-06-16

var minPatches = function (nums, n) {
    let count = 0;
    let missing = 1;
    let i = 0;

    while (missing <= n) {
        if (i < nums.length && nums[i] <= missing) {
            missing += nums[i++];
        } else {
            missing += missing;
            count++;
        }
    }
    return count;
};
