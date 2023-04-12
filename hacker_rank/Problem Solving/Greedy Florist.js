// https://www.hackerrank.com/challenges/greedy-florist/problem?isFullScreen=true
function getMinimumCost(k, c) {
    let sum = 0;
    c.sort((a, b) => { return b - a });
    for (let i in c) {
        //console.log(Math.ceil((Number(i) + 1) / k))
        sum += Math.ceil((Number(i) + 1) / k) * c[i]
    }
    return sum
}
function main() {
    let c = [1, 3, 5, 7, 9];
    let k = 3
    console.log(getMinimumCost(k, c));
}
if (require.main === module) {
    main();
}