// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function hackerrankInString(s) {
    let x = "hackerrank".split("").reverse();
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == x[x.length - 1]) x.pop();
    }
    if (x.length == 0) return "YES"
    else return "NO"
}
function main() {
    let s = "hereiamstackerrank"
    console.log(hackerrankInString(s));
}
if (require.main === module) {
    main();
}