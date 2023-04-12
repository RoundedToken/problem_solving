// https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
function extraLongFactorials(n) {
    let x = BigInt(1);
    let g;
    for (let i = 1; i <= n; i++) {
        g = BigInt(i)
        x *= g;
    }
    console.log(x.toString());
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
function main() {
}
if (require.main === module) {
    main();
}