// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true
function minimumAbsoluteDifference(arr) {
    let min = Number.MAX_VALUE;
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let g = i + 1; g < l; g++) {
            let diff = Math.abs(arr[g] - arr[i]);
            if (diff < min) min = diff;
        }
    }
    return min
}
function main() {
    
    console.log(minimumAbsoluteDifference(arr));
}
if (require.main === module) {
    main();
}