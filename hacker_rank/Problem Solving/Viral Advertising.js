// https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true
function viralAdvertising(n) {
    let x = 0;
    let shared = 5;
    for (let i = 1; i <= n; i++) {
        x += Math.floor(shared / 2);
        shared = Math.floor(shared / 2) * 3;
    }
    return x;
}
function main() {
}
if (require.main === module) {
    main();
}