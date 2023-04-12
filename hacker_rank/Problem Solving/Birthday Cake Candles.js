// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
function birthdayCakeCandles(candles) {
    let count = 0;
    candles.sort(function (a, b) { return b - a });
    for (let i = 0; i < candles.length; i++) {
        count++;
        if (candles[i] != candles[i + 1]) {
            return count;
        }
    }
}
function main() {
}
if (require.main === module) {
    main();
}