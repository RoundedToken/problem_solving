// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
function diagonalDifference(arr) {
    let diff;
    let sumR = 0;
    let sumL = 0;
    for (let k = 0; k < arr.length; k++) {
        sumR += arr[k][k];
        sumL += arr[k][arr.length - 1 - k];
    }
    return Math.abs(sumR - sumL);
}
function main() {
}
if (require.main === module) {
    main();
}