// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-two
function lonelyinteger(a) {
    let x;
    a.sort( function (a, b) { return a - b});
    for (let i = 0; i < a.length; i += 2) {
        if (a[i] != a[i + 1]) {
            return a[i];
        }
    }

}
function main() {
}
if (require.main === module) {
    main();
}