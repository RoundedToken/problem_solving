// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
function timeConversion(s) {
    let value;
    if (s.charAt(8) == "A") {
        if (s.slice(0, 2) == 12) {
            return "00" + s.slice(2, 8);
        }
        return s.slice(0, 8);
    }
    if (s.charAt(8) == "P") {
        if (s.slice(0, 2) != 12) {
            value = parseInt(s.slice(0, 2)) + 12;
            return value.toString() + s.slice(2, 8);
        }
        return s.slice(0, 8);
    }

}
function main() {
}
if (require.main === module) {
    main();
}