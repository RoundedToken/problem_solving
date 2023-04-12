// https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function marsExploration(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 3 == 1) {
            if (s.charAt(i) != "O") count++;
        } else {
            if (s.charAt(i) != "S") count++
        }
    }
    return count
}
function main() {
    let s = "SOSSPSSQSSOR"
    console.log(marsExploration(s));
}
if (require.main === module) {
    main();
}