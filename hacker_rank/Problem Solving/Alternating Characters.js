// https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function alternatingCharacters(s) {
    let l = s.length;
    let count = 0;
    for (let i = 1; i < l; i++) {
        if (s.charAt(i) == s.charAt(i - 1)) count++
    }
    return count
}
function main() {
    let s = "AABABBAA"
    console.log(alternatingCharacters(s));
}
if (require.main === module) {
    main();
}