// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
function staircase(n) {
    let c = "";
    let b = "";
    let count;
    for (let i = 1; i <= n; i++) {
        count = n - i
        console.log(b.padEnd(count, " ") + c.padEnd(i, "#"));
    }

}
function main() {
}
if (require.main === module) {
    main();
}