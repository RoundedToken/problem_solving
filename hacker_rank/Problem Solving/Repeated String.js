// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true
function repeatedString(s, n) {
    let count = 0;
    let x = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == "a") {
            count++;
        }
    }
    for (let i = 0; i < n % s.length; i++) {
        if (s.charAt(i) == "a") {
            x++;
        } 
    }
    return Math.floor(n / s.length) * count + x
}
function main() {
}
if (require.main === module) {
    main();
}