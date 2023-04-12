// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
function compareTriplets(a, b) {
    let Scores = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            Scores[0]++;
        } else if (b[i] > a[i]) {
            Scores[1]++;
        }
    }
    return Scores;
}
function main() {
}
if (require.main === module) {
    main();
}