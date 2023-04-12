// https://www.hackerrank.com/challenges/priyanka-and-toys/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function toys(w) {
    w.sort((a, b) => { return a - b });
    let count = 1;
    let first = w[0];
    let second = w[0] + 4;
    for (let i = 0; i < w.length; i++) {
        if (w[i] >= first && w[i] <= second) continue
        else {
            count++;
            first = w[i];
            second = w[i] + 4;
        }
    }
    return count
}
function main() {

    console.log(toys(w));
}
if (require.main === module) {
    main();
}