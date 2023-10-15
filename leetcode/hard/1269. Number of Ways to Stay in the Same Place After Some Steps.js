// https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/submissions/?envType=daily-question&envId=2023-10-15

var numWays = function (steps, arrLen) {
    var n = Math.min(steps >> 1, arrLen - 1);
    var dp = new Uint32Array(n + 1);
    dp[0] = 1;

    for (var i = 1; i <= steps; ++i) {
        var pre = 0;
        for (var j = 0; j <= n; ++j) {
            dp[j] += pre;
            pre = dp[j] - pre;
            if (j < n) dp[j] += dp[j + 1];
            dp[j] %= 1e9 + 7;
        }
    }

    return dp[0];
};
