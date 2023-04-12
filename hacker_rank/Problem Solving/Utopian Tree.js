// https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true
function utopianTree(n) {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            x++;
        } else { x *= 2}
    }
    return x;
}
function main() {
}
if (require.main === module) {
    main();
}