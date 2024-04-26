// https://leetcode.com/problems/minimum-falling-path-sum-ii/description/?envType=daily-question&envId=2024-04-26

var minFallingPathSum = function (grid) {
    const newGrid = Array(grid.length)
        .fill()
        .map(() => Array(grid.length).fill(Infinity));

    for (let r = grid.length - 1; r >= 0; r--) {
        for (let l = 0; l < grid.length; l++) {
            newGrid[r][l] = grid[r][l] + minFromBelowRow(r, l);
        }
    }

    function minFromBelowRow(r, l) {
        if (r === grid.length - 1) return 0;
        const belowRow = grid[r + 1];
        belowRow[l] = Infinity;
        return Math.min(...belowRow);
    }

    return Math.min(...newGrid[0]);
};
