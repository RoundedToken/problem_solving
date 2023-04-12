// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
function productFib(prod){
    let fib = [0, 1];
    for (let i = 2; i <= 40; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    for (let i = 0; i < fib.length; i++) {
        if (fib[i] * fib[i + 1] == prod) return [fib[i], fib[i + 1], true];
        else if (fib[i] * fib[i + 1] > prod) return [fib[i], fib[i + 1], false]
    }
  }
function main() {
    let prod = 193864606;
    console.log(productFib(prod));
}
if (require.main === module) {
    main();
}