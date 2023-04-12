// https://www.hackerrank.com/challenges/game-with-cells/problem?isFullScreen=true
function gameWithCells(n, m) {
    if (n % 2 != 0) { n++ }
    if (m % 2 != 0) { m++ }
    return n * m / 4
}
function main() {
}
if (require.main === module) {
    main();
}