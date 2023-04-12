// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let count = [0 , 0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            count[0]++;
        } else if (scores[i] < min) {
            min = scores[i];
            count[1]++;
        }
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}