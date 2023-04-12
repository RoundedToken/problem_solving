// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
function isPrime(num) {
    if (num < 2) return false;
    let x = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= x; i++) {
        if (num % i == 0) return false
    }
    return true
  }
function main() {
    let num = 75
    console.log(isPrime(num));
}
if (require.main === module) {
    main();
}