// https://leetcode.com/problems/frequency-of-the-most-frequent-element/?envType=daily-question&envId=2023-11-18

var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);
    var sum = 0;
    var start = 0;
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (nums[i] * (i - start + 1) - sum > k) {
            sum -= nums[start];
            start++;
        }
        res = Math.max(res, i - start + 1);
    }
    return res;
};
