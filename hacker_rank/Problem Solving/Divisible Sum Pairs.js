// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let g = i + 1; g < n; g++) {
            if ((ar[i] + ar[g]) % k == 0) {
                count++;
            }
        }
    }
    return count;
}
function main() {
}
if (require.main === module) {
    main();
}