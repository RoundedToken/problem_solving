// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
    return fib[n - 1];
}

function main() {
    const n = 5;
    console.log(nthFibo(n));
}
if (require.main === module) {
    main();
}
