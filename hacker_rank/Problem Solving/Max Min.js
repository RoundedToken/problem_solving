// https://www.hackerrank.com/challenges/angry-children/problem?isFullScreen=true
function maxMin(k, arr) {
    let l = arr.length;
    let min = Number.MAX_VALUE;
    arr.sort((a , b) => { return a - b });
    for (let i = 0; i < l - k + 1; i++) {
        if (arr[i + k - 1] - arr[i] < min) min = arr[i + k - 1] - arr[i];
    }
    return min
}
function main() {
    let arr = [100, 200, 300, 350, 400, 401, 402];
    let k = 3;
    console.log(maxMin(k, arr));
}
if (require.main === module) {
    main();
}