// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
function sockMerchant(n, ar) {
    let count = 1;
    let pair = 0;
    ar.sort(function(a,b){return a - b});
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            count++;
        } else {
            pair += Math.floor(count / 2);
            count = 1;
        }
    }
    return pair;
}
function main() {
}
if (require.main === module) {
    main();
}