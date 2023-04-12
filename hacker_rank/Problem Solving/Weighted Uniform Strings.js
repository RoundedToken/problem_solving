// https://www.hackerrank.com/challenges/weighted-uniform-string/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function weightedUniformStrings(s, queries) {
    let x = "abcdefghijklmnopqrstuvwxyz".split("");
    let MAP = new Map();
    let SET = new Set();
    let solution = Array();
    for (let i = 0; i < x.length; i++) {
        MAP.set(x[i], i + 1);
    }
    let sum = MAP.get(s.charAt(0));
    SET.add(sum)
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) == s.charAt(i - 1)) {
            SET.add(sum)
            sum += MAP.get(s.charAt(i));
            SET.add(sum)
           
        }
        else {
            SET.add(sum);
            sum = MAP.get(s.charAt(i))
            SET.add(sum);
        }
    }
    console.log(SET)
    for (let i = 0; i < queries.length; i++) {
        if (SET.has(queries[i])) solution.push("Yes");
        else solution.push("No")
    }
    return solution

}
function main() {
    let s = "l";
    let queries = [1, 12];
    console.log(weightedUniformStrings(s, queries));
}
if (require.main === module) {
    main();
}