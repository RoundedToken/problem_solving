// https://leetcode.com/problems/unique-paths/?envType=daily-question&envId=2023-09-03

const uniquePaths = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    const pathsFromTop = uniquePaths(m - 1, n, memo);
    const pathsFromLeft = uniquePaths(m, n - 1, memo);
    memo[key] = pathsFromTop + pathsFromLeft;
    return memo[key];
};

function main() {
    console.log(uniquePaths(3, 7));
}
if (require.main === module) {
    main();
}
