// https://www.hackerrank.com/challenges/chocolate-feast/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function chocolateFeast(n, c, m) {
    let wrappers = 0;
    let bars = 0;
    while (n > 0) {
        if (n - c >= 0) {
            bars++;
            wrappers++;
        }
        if (wrappers >= m) {
            wrappers -= m;
            bars++;
            wrappers++;
        }
        n -= c;
    }
    return bars
}
function main() {
    let n = 7;
    let c = 3;
    let m = 2;
    console.log(chocolateFeast(n, c, m));
}
if (require.main === module) {
    main();
}