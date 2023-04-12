// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one
function miniMaxSum(arr) {
    arr.sort(function (a, b) {return a - b})
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        min += arr[i];
    }
    for (let i = 1; i < arr.length; i++) {
        max += arr[i]
    }
    console.log(min, max);
}
function main() {
}
if (require.main === module) {
    main();
}