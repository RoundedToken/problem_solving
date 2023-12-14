// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/?envType=daily-question&envId=2023-12-14

var onesMinusZeros = function (grid) {
    const onesRows = grid.map((r) => r.reduce((acc, v) => acc + v, 0));
    const onesCols = grid[0].map((_, i) => grid.map((r) => r[i]).reduce((acc, v) => acc + v, 0));
    const dim = grid.length + grid[0].length;

    return grid.map((r, i) => r.map((c, j) => (onesRows[i] + onesCols[j]) * 2 - dim));
};
