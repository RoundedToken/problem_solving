// https://leetcode.com/problems/largest-local-values-in-a-matrix/description/?envType=daily-question&envId=2024-05-12

var largestLocal = function (grid) {
    let len = grid.length;
    let res = [];

    for (let i = 1; i < len - 1; i++) {
        let row = [];
        for (let j = 1; j < len - 1; j++) {
            let max = 0;
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    max = Math.max(max, grid[k][l]);
                }
            }
            row.push(max);
        }
        res.push(row);
    }
    return res;
};
