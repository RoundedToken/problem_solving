// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
    num = num.toString();
    let count = 0;
    while (num.length > 1) {
        let mult = 1;
        num.split("").map((val) => mult *= Number(val));
        num = mult.toString();
        count++
    };
    return count
 }
function main() {
    let num = 999;
    console.log(persistence(num));
}
if (require.main === module) {
    main();
}
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)