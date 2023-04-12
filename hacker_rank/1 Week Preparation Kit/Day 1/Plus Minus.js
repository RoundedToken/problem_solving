// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function plusMinus(arr) {
    var countPos = 0;
    var countNeg = 0;
    var countZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) {
            countPos++;
        } else if (arr[i] < 0) {
            countNeg++;
        } else {countZero++}
    }
    console.log((countPos / arr.length).toFixed(6));
    console.log((countNeg / arr.length).toFixed(6));
    console.log((countZero / arr.length).toFixed(6));
}
function main() {
}
if (require.main === module) {
    main();
}