// https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function stringConstruction(s) {
    let SET = new Set(Array.from(s))
    return SET.size
}
function main() {
    let s = "abcd"
    console.log(stringConstruction(s));
}
if (require.main === module) {
    main();
}