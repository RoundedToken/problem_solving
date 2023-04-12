// https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function pangrams(s) {
    let x = "abcdefghijklmnopqrstuvwxyz".split("");
    x = new Set(x)
    for (let i = 0; i < s.length; i++) {
        if (x.has(s.charAt(i).toLowerCase())) x.delete(s.charAt(i).toLowerCase());
    }
    if (x.size == 0) return "pangram"
    else return "not pangram"
}
function main() {
    let s = "We promptly judged antique ivory buckles for the prize"
    console.log(pangrams(s));
}
if (require.main === module) {
    main();
}