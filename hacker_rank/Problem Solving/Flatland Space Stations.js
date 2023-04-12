// https://www.hackerrank.com/challenges/flatland-space-stations/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function flatlandSpaceStations(n, c) {
    let l = c.length;
    c.sort(function (a, b) { return a - b })
    let Dist = [];
    Dist.push(n - 1 - c[l - 1]);
    Dist.push(c[0] - 0);
    if (l > 1) {
        for (let i = 1; i < l; i++) {
            Dist.push((Math.floor((c[i] - c[i - 1]) / 2)))
        }
    }
    return Math.max(...Dist);
}
function main() {
    let n = 20;
    let c = [13, 1, 11, 10, 6];
    console.log(flatlandSpaceStations(n, c));
}
if (require.main === module) {
    main();
}