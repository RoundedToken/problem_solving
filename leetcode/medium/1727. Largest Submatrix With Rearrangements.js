// https://leetcode.com/problems/largest-submatrix-with-rearrangements/?envType=daily-question&envId=2023-11-26

var largestSubmatrix = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let j = 0; j < n; j++) {
        for (let i = 1; i < m; i++) {
            matrix[i][j] = matrix[i][j] ? matrix[i - 1][j] + 1 : 0;
        }
    }
    let ans = 0;
    for (let i = 0; i < m; i++) {
        matrix[i].sort((a, b) => b - a);
        let s = matrix[i][0];
        for (j = 1; j < n && matrix[i][j] > 0; j++) {
            s = Math.max(s, matrix[i][j] * (j + 1));
        }
        ans = Math.max(ans, s);
    }
    return ans;
};
