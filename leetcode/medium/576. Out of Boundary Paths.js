// https://leetcode.com/problems/out-of-boundary-paths/description/?envType=daily-question&envId=2024-01-26

var findPaths = function (m, n, N, i, j, memo = new Map()) {
    const key = N + ',' + i + ',' + j;
    if (memo.has(key)) return memo.get(key);
    const isOutside = i === -1 || i === m || j === -1 || j === n;
    if (N === 0 || isOutside) return +isOutside;
    memo.set(
        key,
        (findPaths(m, n, N - 1, i - 1, j, memo) +
            findPaths(m, n, N - 1, i + 1, j, memo) +
            findPaths(m, n, N - 1, i, j + 1, memo) +
            findPaths(m, n, N - 1, i, j - 1, memo)) %
            1000000007
    );
    return memo.get(key);
};
