// https://www.hackerrank.com/challenges/fibonacci-modified/problem?isFullScreen=true
function fibonacciModified(t1, t2, n) {
    
    if (n == t1) return t1;
    else if (n == t2) return t2;
    else {
        t1 = BigInt(t1);
        t2 = BigInt(t2);
        let arr = Array(n);
        arr[0] = t1;
        arr[1] = t2;
        for (let i = 2; i < n; i++) {
            arr[i] = arr[i - 2] + arr[i - 1] ** 2n
        }
        return arr[n - 1]
    }
    
}
function main() {
    let t1 = 0;
    let t2 = 1;
    let n = 6;
    console.log(fibonacciModified(t1, t2, n));
}
if (require.main === module) {
    main();
}