// https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true
function findDigits(n) {
    let N = n.toString();
    let count = 0;
    for (let i = 0; i < N.length; i++) {
        if (n % N.charAt(i) == 0 && N.charAt(i) != 0) {
            count++;
        }
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}