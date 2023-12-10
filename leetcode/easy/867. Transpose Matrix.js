// https://leetcode.com/problems/transpose-matrix/?envType=daily-question&envId=2023-12-10

var transpose = function (A) {
    let result = [];

    for (let i = 0; i < A[0].length; i++) {
        let currentCol = [];
        for (let j = 0; j < A.length; j++) {
            currentCol.push(A[j][i]);
        }
        result.push(currentCol);
    }
    return result;
};
