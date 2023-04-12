// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
    if (k <= 0 || strarr.length < k || strarr.length == 0) return "";
    let conc = [];
    for (let i = 0; i <= strarr.length - k; i++) conc.push(strarr.slice(i, i + k).reduce((x, v) => x + v));
    return conc[conc.map((v) => v.length).indexOf(Math.max(...conc.map((v) => v.length)))];
}
function main() {
    let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
    let k = 2;
    console.log(longestConsec(strarr, k));
}
if (require.main === module) {
    main();
}