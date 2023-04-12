// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
function main() {
}
if (require.main === module) {
    main();
}