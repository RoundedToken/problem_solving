// https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/

var luckyNumbers = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let minRow = Math.min(...row);
        let index = row.indexOf(minRow);
        if (matrix.every((element) => element[index] <= minRow)) {
            return [minRow];
        }
    }
    return [];
};
