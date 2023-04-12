// https://www.hackerrank.com/challenges/handshake/problem?isFullScreen=true
function handshake(n) {
    function S(n) {
        if (n == 1) {return 0}
        return S(n - 1) + n - 1
    }
    return S(n)
}
function main() {
}
if (require.main === module) {
    main();
}