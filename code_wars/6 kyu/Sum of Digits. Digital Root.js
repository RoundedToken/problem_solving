// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
    n = n.toString();
    while (n.length > 1) {
        let sum = 0;
        n.split("").map((val) => sum += Number(val));
        n = sum.toString();
    }
    return Number(n)
  }
function main() {
    let n = 493193
    console.log(digitalRoot(n));
}
if (require.main === module) {
    main();
}
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2