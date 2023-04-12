// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
    let l = value.toString().length;
    return (value.toString().split("").reduce((x, val) => x + Number(val) ** l, 0) == value) ? true : false;
  }
function main() {
    let value = 371;
    console.log(narcissistic(value));
}
if (require.main === module) {
    main();
}