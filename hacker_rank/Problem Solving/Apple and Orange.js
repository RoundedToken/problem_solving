// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countAplles = 0;
    let countOranges = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            countAplles++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] <= t && b + oranges[i] >= s) {
            countOranges++;
        }
    }
    console.log(countAplles);
    console.log(countOranges);
}
function main() {
}
if (require.main === module) {
    main();
}