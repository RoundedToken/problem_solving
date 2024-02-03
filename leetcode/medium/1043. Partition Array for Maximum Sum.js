// https://leetcode.com/problems/partition-array-for-maximum-sum/description/?envType=daily-question&envId=2024-02-03

var maxSumAfterPartitioning = function (arr, k) {
    const size = arr.length;
    const dp = Array(size + 1).fill(0);

    for (let index = 1; index <= size; index++) {
        let maxCurrent = 0;
        for (let n = 1; n <= k; n++) {
            if (index - n < 0) continue;
            maxCurrent = Math.max(maxCurrent, arr[index - n]);
            dp[index] = Math.max(dp[index], dp[index - n] + maxCurrent * n);
        }
    }
    return dp[size];
};
