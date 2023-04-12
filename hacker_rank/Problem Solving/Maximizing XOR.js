// https://www.hackerrank.com/challenges/maximizing-xor/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function maximizingXor(l, r) {
    let max = 0;
    for (let i = l; i <= r; i++) {
        for (let g = l; g <= r; g++) {
            if (Number(i ^ g) > max) max = Number(i ^ g)
        }
    }
    return max

}
function main() {
    l = 1;
    r = 1000;
    console.log(maximizingXor(l, r));
}
if (require.main === module) {
    main();
}