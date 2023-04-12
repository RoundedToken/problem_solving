// https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true
function balancedSums(arr) {
    let pSum = [0];
    let l = arr.length;
    for (let i = 1; i <= l; i++) {
        pSum[i] = pSum[i - 1] + arr[i - 1];
    }
    let lP = pSum.length;
    for (let i = 0; i < l; i++) {
        let rightS = pSum[i];
        let leftS = pSum[lP - 1] - pSum[i + 1];
        if (rightS == leftS) return "YES"
    }
    //console.log(pSum)
    return "NO"
}
function main() {
    let arr = [5, 6, 8, 11];
    console.log(balancedSums(arr));
}
if (require.main === module) {
    main();
}