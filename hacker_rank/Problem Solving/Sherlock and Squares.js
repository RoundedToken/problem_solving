// https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true
function squares(a, b) {
    let x = Math.floor(Math.sqrt(b)) - Math.floor(Math.sqrt(a));
    if (a % Math.sqrt(a) == 0) { x++ }
    return x
}
function main() {
}
if (require.main === module) {
    main();
}