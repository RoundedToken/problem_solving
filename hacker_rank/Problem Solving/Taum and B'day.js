// https://www.hackerrank.com/challenges/taum-and-bday/problem?isFullScreen=true
function taumBday(b, w, bc, wc, z) {
    let min = (a, b) => a > b ? b : a;
    [b, w, bc, wc, z] = [b, w, bc, wc, z].map(n => BigInt(n));
    return b * min(bc, wc + z) + w * min(wc, bc + z);

}
function main() {
}
if (require.main === module) {
    main();
}