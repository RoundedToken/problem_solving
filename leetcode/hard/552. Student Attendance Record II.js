// https://leetcode.com/problems/student-attendance-record-ii/description/?envType=daily-question&envId=2024-05-26

var checkRecord = function (n) {
    const MOD = 1000000007;
    let dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => Array(3).fill(0)));

    dp[0][0][0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let a = 0; a < 2; a++) {
            for (let l = 0; l < 3; l++) {
                dp[i][a][0] = (dp[i][a][0] + dp[i - 1][a][l]) % MOD;
                if (a > 0) {
                    dp[i][a][0] = (dp[i][a][0] + dp[i - 1][a - 1][l]) % MOD;
                }
                if (l < 2) {
                    dp[i][a][l + 1] = (dp[i][a][l + 1] + dp[i - 1][a][l]) % MOD;
                }
            }
        }
    }
    let resu = 0;
    for (let a = 0; a < 2; a++) {
        for (let l = 0; l < 3; l++) {
            resu = (resu + dp[n][a][l]) % MOD;
        }
    }
    return resu;
};
