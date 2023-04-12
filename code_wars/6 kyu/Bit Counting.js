// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
var countBits = function(n) {
    return n.toString(2).split("").filter((val) => {return val == 1}).length;
  };
function main() {
    let n = 1234;
    console.log(countBits(n));
}
if (require.main === module) {
    main();
}