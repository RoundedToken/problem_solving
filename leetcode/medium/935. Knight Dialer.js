// https://leetcode.com/problems/knight-dialer/?envType=daily-question&envId=2023-11-27

const moves = {
    0: [4, 6],
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    5: [],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
};

const knightDialer = (n) => {
    const dp = Array.from({ length: n + 1 }, (_, i) => Array(10).fill(i === 1 ? 1 : 0));
    const mod = 10 ** 9 + 7;

    for (let count = 1; count <= n; count++)
        for (let digit = 0; digit <= 9; digit++)
            moves[digit].forEach((move) => (dp[count][digit] += dp[count - 1][move] % mod));

    return dp[n].reduce((a, x) => a + x, 0) % mod;
};
