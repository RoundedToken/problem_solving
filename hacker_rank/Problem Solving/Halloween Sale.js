// https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function howManyGames(p, d, m, s) {
    let count = 0;
    while (s > 0) {
        if (p <= m) {
            s -= m;
        } else {
            s -= p;
            p -= d;
        }
        count++;
    }
    console.log(s)
    if (s < 0) { count-- }
    return count
}
function main() {
    let p = 16;
    let d = 2;
    let m = 1;
    let s = 9981;
    console.log(howManyGames(p, d, m, s));
}
if (require.main === module) {
    main();
}