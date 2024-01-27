// https://leetcode.com/problems/k-inverse-pairs-array/description/?envType=daily-question&envId=2024-01-27

var kInversePairs = function (n, k, MOD = 10 ** 9 + 7) {
    const [dp, pr] = [new Array(k + 2).fill(0), new Array(k + 2).fill(0)];

    for (let i = 1; i <= n; i++) {
        dp[1] = 1;

        for (let j = 2; j <= k + 1; j++) {
            dp[j] = (pr[j] - pr[Math.max(0, j - i)] + MOD) % MOD;
        }
        for (let j = 1; j <= k + 1; j++) {
            pr[j] = (pr[j - 1] + dp[j]) % MOD;
        }
    }

    return dp[k + 1];
};
