// https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true
function cutTheSticks(arr) {
    let B = [];
    let count = 0;
    let k = 0;
    arr.sort(function (a, b) { return b - a });
    while (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] -= arr[arr.length - 1];
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= 0) {
                count++;
            }
        }
        B[k] = arr.length;
        k++;
        for (let i = 0; i < count; i++) {
            arr.pop();
        }
        count = 0;
    }
    return B;
}
function main() {
}
if (require.main === module) {
    main();
}