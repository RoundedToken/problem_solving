// https://leetcode.com/problems/arithmetic-slices-ii-subsequence/?envType=daily-question&envId=2024-01-07

var numberOfArithmeticSlices = function (nums) {
    let n = nums.length;
    let res = 0;
    let dp = new Array(n).fill(0).map(() => new Map());
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let cnt = dp[j].get(diff) || 0;
            res += cnt;
            dp[i].set(diff, (dp[i].get(diff) || 0) + cnt + 1);
        }
    }
    return res;
};
