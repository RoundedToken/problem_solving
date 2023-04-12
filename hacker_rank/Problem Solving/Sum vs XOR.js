// https://www.hackerrank.com/challenges/sum-vs-xor/problem?isFullScreen=true
function sumXor(n) {
    return 2 ** (n ? [...(n.toString(2))].filter(_ => _ == '0').length : 0)

}
function main() {
    n = 64
    console.log(sumXor(n));
}
if (require.main === module) {
    main();
}