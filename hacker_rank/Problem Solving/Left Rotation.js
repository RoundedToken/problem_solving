// https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true
function rotateLeft(d, arr) {
    let l = arr.length;
    let B = [];
    for (let i = 0; i < l; i++) {
        B[i] = arr[(i + d) % l];
    }
    return B
}
function main() {
}
if (require.main === module) {
    main();
}