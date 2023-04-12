// https://www.hackerrank.com/challenges/service-lane/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function serviceLane(n, cases, width) {
    let L = cases.length;
    let A = [];
    for (let i = 0; i < L; i++) {
        let min = Number.MAX_VALUE;
        for (let g = cases[i][0]; g <= cases[i][1]; g++) {
            if (width[g] < min) {
                min = width[g];
            }
        }
        A[i] = min;
    }
    return A;
    //return cases.map( (c) => Math.min(...width.slice(c[0], c[1] + 1)))
}
function main() {
    let n = 8;
    let width = [2, 3, 1, 2, 3, 2, 3, 3];
    let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
    console.log(serviceLane(n, cases, width));
}
if (require.main === module) {
    main();
}