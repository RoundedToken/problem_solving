// https://leetcode.com/problems/longest-increasing-subsequence/?envType=daily-question&envId=2024-01-05

var lengthOfLIS = function (nums) {
    let sequence = [nums[0]];
    nums.forEach((num, idx) => {
        if (num > sequence[sequence.length - 1]) sequence.push(num);
        else sequence[sequence.findIndex((val) => val >= num)] = num;
    });
    return sequence.length;
};
