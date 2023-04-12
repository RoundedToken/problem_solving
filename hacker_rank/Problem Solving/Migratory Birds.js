// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
function migratoryBirds(arr) {
    let maxCount = 0;
    let count = 1;
    let maxValue;
    arr.sort(function (a, b){return a - b });
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            count++;
        } else {
            if (maxCount < count) {
                maxCount = count;
                maxValue = arr[i - 1];
            }
            count = 1;
        }
    }
    return maxValue;
}
function main() {
}
if (require.main === module) {
    main();
}