// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
function simpleArraySum(ar) {
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