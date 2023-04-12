// https://www.hackerrank.com/challenges/3d-surface-area/problem?isFullScreen=true
function surfaceArea(A) {
    let lRow = A.length;
    let lCol = A[0].length;
    let s = 0;
    for (let i = 0; i < lRow; i++) {
        for (let g = 0; g < lCol; g++) {
            if (g - 1 < 0) { s += A[i][g] } 
            else if (A[i][g - 1] < A[i][g]) { s += A[i][g] - A[i][g - 1]} 

            if  (g + 1 == lCol) { s += A[i][g] } 
            else if (A[i][g + 1] < A[i][g]) { s += A[i][g] - A[i][g + 1]}

            if  (i - 1 < 0) { s += A[i][g] } 
            else if (A[i - 1][g] < A[i][g]) { s += A[i][g] - A[i - 1][g]}

            if  (i + 1 == lRow) { s += A[i][g] } 
            else if (A[i + 1][g] < A[i][g]) { s += A[i][g] - A[i + 1][g]}

            s += 2;
        }
    }
    return s
}
function main() {
    let A = [[1, 3, 4], [2, 2, 3], [1, 2, 4]];
    console.log(surfaceArea(A));
}
if (require.main === module) {
    main();
}