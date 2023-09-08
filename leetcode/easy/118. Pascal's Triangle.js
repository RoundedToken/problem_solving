// https://leetcode.com/problems/pascals-triangle/

var generate = function (numRows) {
    const result = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [1];
        const prevRow = result.at(-1);

        for (let g = 0; g < prevRow.length - 1; g++) {
            row.push(prevRow[g] + prevRow[g + 1]);
        }

        row.push(1);
        result.push(row);
    }

    return result;
};
