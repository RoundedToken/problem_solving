// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
function pageCount(n, p) {
    let startCount = 0;
    let endCount = 0;
    startCount = Math.floor(p / 2);
    if (n - p == 1 && n % 2 == 0) {endCount = 1}
    else if (n - p == 1 && n % 2 != 0) {endCount = 0}
    else {endCount = Math.floor((n - p) / 2)}
    if (endCount < startCount) {return endCount}
    else {return startCount}
}
function main() {
}
if (require.main === module) {
    main();
}