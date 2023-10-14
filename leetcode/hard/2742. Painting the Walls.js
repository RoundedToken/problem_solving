// https://leetcode.com/problems/painting-the-walls/?envType=daily-question&envId=2023-10-14

var paintWalls = function (cost, time) {
    var n = cost.length,
        dp = new Uint32Array(n + 1).fill(-1);
    dp[0] = 0;

    for (var i = 0; i < n; ++i)
        for (var j = n; j > 0; --j)
            dp[j] = Math.min(dp[j], cost[i] + dp[Math.max(0, j - time[i] - 1)]);

    return dp[n];
};
