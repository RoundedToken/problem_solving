// https://www.hackerrank.com/challenges/luck-balance/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function luckBalance(k, contests) {
    let sumAll = 0;
    let sumW = 0;
    let important = [];
    for (let i = 0; i < contests.length; i++) {
        sumAll += contests[i][0];
        if (contests[i][1] == 1) important.push(contests[i][0]);
    }
    important.sort((a , b) => { return a - b })
    for (let i = 0; i < important.length - k; i++) {
        sumW += important[i]
    }
    return sumAll - sumW * 2
}
function main() {
    let contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
    let k = 3;
    console.log(luckBalance(k, contests));
}
if (require.main === module) {
    main();
}