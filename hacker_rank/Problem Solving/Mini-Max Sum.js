// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
function miniMaxSum(arr) {
    let sumMin = 0;
    let sumMax = 0;
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr.length - 1; i++) {
        sumMin += arr[i];
    }
    arr.sort(function (a, b) { return b - a });
    for (let i = 0; i < arr.length - 1; i++) {
        sumMax += arr[i];
    }
    console.log(sumMin, sumMax);
}
function main() {
}
if (require.main === module) {
    main();
}