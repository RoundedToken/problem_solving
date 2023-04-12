// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
function digPow(n, p){
    let x = n.toString().split("").reduce((tot, val) => {
        p++;
        return tot + Number(val) ** (p - 1);
    }, 0);
    return (x % n == 0) ? x / n : - 1;
  }
function main() {
    let n = 46288;
    let p = 3;
    console.log(digPow(n, p));
}
if (require.main === module) {
    main();
}
// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51