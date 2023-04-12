// https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-three
function towerBreakers(n, m) {
    if (m == 1) {return 2}
    if (n % 2 != 0) {return 1}
    else {return 2}
}
function main() {
}
if (require.main === module) {
    main();
}