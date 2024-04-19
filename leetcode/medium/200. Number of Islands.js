// https://leetcode.com/problems/number-of-islands/description/?envType=daily-question&envId=2024-04-19

var numIslands = function (grid) {
    const CONFIG = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];
    let output = 0;

    const checkIsInValid = (row, col) => row < 0 || row >= grid.length || col < 0 || col >= grid[0].length;

    const dfs = (row, col, grid) => {
        if (checkIsInValid(row, col) || grid[row][col] === '0') return;

        grid[row][col] = '0';

        for (const item of CONFIG) {
            dfs(row + item[0], col + item[1], grid);
        }
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                output++;
                dfs(i, j, grid);
            }
        }
    }

    return output;
};
