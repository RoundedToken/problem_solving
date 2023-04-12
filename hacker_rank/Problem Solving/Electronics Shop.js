// https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let g = 0; g < drives.length; g++) {
            if (keyboards[i] + drives[g] <= b) {
                if (keyboards[i] + drives[g] > max) {
                    max = keyboards[i] + drives[g];
                }
            }
        }
    }
        return max;
}
function main() {
}
if (require.main === module) {
    main();
}