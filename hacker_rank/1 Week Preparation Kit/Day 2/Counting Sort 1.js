// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-two
function countingSort(arr) {
    let x = arr.reduce((max, value) => {return Math.max(max, value)})
    let answer = Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        answer[arr[i]]++;
    }
    return answer;
}
function main() {
}
if (require.main === module) {
    main();
}