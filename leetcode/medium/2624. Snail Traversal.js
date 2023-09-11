// https://leetcode.com/problems/snail-traversal/description/

Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];

    const grid = Array(rowsCount)
        .fill()
        .map(() => []);
    let point = 0;

    for (let col = 0; col < colsCount; col++) {
        if (col % 2) {
            for (let row = rowsCount - 1; row >= 0; row--) {
                grid[row][col] = this[point];
                point++;
            }
        } else {
            for (let row = 0; row < rowsCount; row++) {
                grid[row][col] = this[point];
                point++;
            }
        }
    }

    return grid;
};
