// https://www.hackerrank.com/challenges/flipping-bits/problem?isFullScreen=true
function flippingBits(n) {
    let binaryText = n.toString(2).padStart(32, "0")
    binaryText =  binaryText.replace(/0/g, "x")
    binaryText =  binaryText.replace(/1/g, "0")
    binaryText =  binaryText.replace(/x/g, "1")
    return parseInt(binaryText, 2)
}
function main() {
    let n = 9
    console.log(flippingBits(n));
}
if (require.main === module) {
    main();
}