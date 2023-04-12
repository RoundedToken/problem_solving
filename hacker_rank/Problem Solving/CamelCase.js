// https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function camelcase(s) {
    let count = 1;
    let l = s.length;
    for (let i = 0; i < l; i++) {
        if (s.charAt(i) == s.charAt(i).toUpperCase()) count++
    }
    return count
}
function main() {
    let s = "saveChangesInTheEditor"
    console.log(camelcase(s));
}
if (require.main === module) {
    main();
}