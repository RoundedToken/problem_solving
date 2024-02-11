// https://leetcode.com/problems/cherry-pickup-ii/description/?envType=daily-question&envId=2024-02-11

var cherryPickup = function (grid) {
    let [m, n] = [grid.length, grid[0].length];
    let memo = {};
    function dfs(row, col1, col2) {
        if (row === m || col1 < 0 || col1 === n || col2 < 0 || col2 === n) return 0;
        if (`${row},${col1},${col2}` in memo) return memo[`${row},${col1},${col2}`];
        let cherries = grid[row][col1] + (col1 !== col2 ? grid[row][col2] : 0);
        let max = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                max = Math.max(max, dfs(row + 1, col1 + i, col2 + j));
            }
        }
        let ans = cherries + max;
        memo[`${row},${col1},${col2}`] = ans;
        return ans;
    }
    return dfs(0, 0, n - 1);
};
