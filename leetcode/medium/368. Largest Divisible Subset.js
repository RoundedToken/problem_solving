// https://leetcode.com/problems/largest-divisible-subset/description/?envType=daily-question&envId=2024-02-09

var largestDivisibleSubset = function (nums) {
    const n = nums.length;
    if (n <= 1) return nums;

    nums.sort((a, b) => a - b);
    const dp = new Array(n).fill(1);
    const pre = new Array(n).fill(-1);
    let maxIndex = 0;

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                pre[i] = j;
                if (dp[i] > dp[maxIndex]) maxIndex = i;
            }
        }
    }

    const res = [];
    while (maxIndex !== -1) {
        res.push(nums[maxIndex]);
        maxIndex = pre[maxIndex];
    }
    return res.reverse();
};
