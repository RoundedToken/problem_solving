// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/?envType=daily-question&envId=2023-12-26

const numRollsToTarget = (d, f, target) => {
    let dp = initialize2DArrayNew(d + 1, target + 1);
    dp[0][0] = 1;
    for (let i = 1; i <= d; i++) {
        for (let j = 1; j <= f; j++) {
            for (let k = j; k <= target; k++) {
                dp[i][k] = (dp[i][k] + dp[i - 1][k - j]) % mod;
            }
        }
    }
    return dp[d][target];
};
const mod = 1e9 + 7;

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};
