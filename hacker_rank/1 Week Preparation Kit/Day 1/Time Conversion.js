// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one
function timeConversion(s) {
    if (s.charAt(8) == "P" && s.slice(0, 2) != "12") {
        return (Number(s.slice(0, 2)) + 12).toString() + s.slice(2, 8);
    }
    if (s.charAt(8) == "A" && s.slice(0, 2) == "12") {
        return ("00" + s.slice(2, 8));
    } else {return s.slice(0, 8)}

}
function main() {
}
if (require.main === module) {
    main();
}