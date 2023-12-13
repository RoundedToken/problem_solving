// https://leetcode.com/problems/special-positions-in-a-binary-matrix/?envType=daily-question&envId=2023-12-13

var numSpecial = function (mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const rowArr = new Int8Array(rows);
    const colArr = new Int8Array(cols);
    const set = new Set();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j]) {
                set.add([i, j]);
                rowArr[i]++;
                colArr[j]++;
            }
        }
    }

    let count = 0;
    for (const [y, x] of set) {
        if (rowArr[y] === 1 && colArr[x] === 1) count++;
    }
    return count;
};
