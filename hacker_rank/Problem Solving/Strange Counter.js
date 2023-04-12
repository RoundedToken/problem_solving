// https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function strangeCounter(t) {
    let x = 3;
    while (t > x) {
        t -= x;
        x *= 2;
    }
    return x - t + 1
}
function main() {
    let t = 17
    console.log(strangeCounter(t));
}
if (require.main === module) {
    main();
}