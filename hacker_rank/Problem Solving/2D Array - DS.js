// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true
function hourglassSum(arr) {
    let maxSum = -1000000000;
    for (let i = 1; i < 5; i++) {
        for (let g = 1; g < 5; g++) {
            let sum = arr[i][g] + 
            arr[i - 1][g - 1] + arr[i - 1][g] + arr[i - 1][g + 1] +
            arr[i + 1][g - 1] + arr[i + 1][g] + arr[i + 1][g + 1];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum
}
function main() {
}
if (require.main === module) {
    main();
}