// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
function countingValleys(steps, path) {
    let count = 0;
    let x = 0;
    let y = 0;
    let flag = false;
    let B = Array.from(path);
    for (let i = 0; i < B.length; i++) {
        if (B[i] == "D") {y = -1}
        else if (B[i] == "U") {y = 1}
        x += y;
        if (x < 0 && flag == false) {count++}
        if (x < 0) {flag = true}
        else {flag = false}
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}