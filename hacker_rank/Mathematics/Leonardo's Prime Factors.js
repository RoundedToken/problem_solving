// https://www.hackerrank.com/challenges/leonardo-and-prime/problem?isFullScreen=true
function primeCount(n) {
    n = BigInt(n);
    function primality(n) {
        let i = BigInt(2);
        while (i * i <= n) {
            if (n % i == 0) {
                return 0
            }
            i++;
        }
        return 1
    }
    if (n < 2) { return 0 }
    let count = 0;
    let sum = BigInt(1);
    for (let i = BigInt(2); ; i++) {
        if (primality(i) == 1) {
            count++;
            sum *= i;
        }
        if (sum == n) { return count }
        if (sum > n) { return count - 1 }
    }
}
function main() {
}
if (require.main === module) {
    main();
}