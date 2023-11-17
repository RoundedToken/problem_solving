// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/?envType=daily-question&envId=2023-11-17

var minPairSum = function (nums) {
    let max = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0, sum; i < nums.length / 2; i++) {
        sum = nums[i] + nums[nums.length - 1 - i];
        if (sum > max) max = sum;
    }

    return max;
};
