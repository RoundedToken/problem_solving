// https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function twoStrings(s1, s2) {
    let SET;
    let flag = false;
    if (s1.length < s2.length) {
        SET = new Set(Array.from(s1));
        SET.forEach((val) => {
            if (Array.from(s2.matchAll(val)).length > 0) return flag = true
        })
    }
    else {
        SET = new Set(Array.from(s2));
        SET.forEach((val) => {
            if (Array.from(s1.matchAll(val)).length > 0) return flag = true
        })
    }
    if (flag) return "YES";
    else return "NO"
}
function main() {
    let s1 = "ab";
    let s2 = "poippk";
    console.log(twoStrings(s1, s2));
}
if (require.main === module) {
    main();
}