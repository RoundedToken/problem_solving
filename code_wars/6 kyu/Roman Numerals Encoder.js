// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
// function solution(number) {
//     let value = new Map([
//         ["I", 1],
//         ["V", 5],
//         ["X", 10],
//         ["L ", 50],
//         ["C", 100],
//         ["D ", 500],
//         ["M ", 1000]
//     ]);
//     let current = 1;
//     let answer = 0;
//     for (let i = number.length - 1; i >=0; i--) {
//         let x = value.get(number[i])
//         if (x > current) {current = x; answer += x;}
//         else if (x == current) answer += x;
//         else answer -= x;
//     }
//     return answer
// }
function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}
function main() {
  let number = "XIV";
  console.log(solution(number));
}
if (require.main === module) {
  main();
}
// assert.strictEqual(solution(1), 'I', '1 should return "I"')
//     assert.strictEqual(solution(2), 'II', '2 should return "II"')
//     assert.strictEqual(solution(3), 'III', '3 should return "III"')
//     assert.strictEqual(solution(4), 'IV', '4 should return "IV"')
//     assert.strictEqual(solution(5), 'V', '5 should return "V"')
//     assert.strictEqual(solution(9), 'IX', '9 should return "IX"')
//     assert.strictEqual(solution(10), 'X', '10 should return "X"')
//     assert.strictEqual(solution(11), 'XI', '11 should return "XI"')
//     assert.strictEqual(solution(19), 'XIX', '19 should return "XIX"')
//     assert.strictEqual(solution(22), 'XXII', '22 should return "XXII"')
//     assert.strictEqual(solution(15), 'XV', '15 should return "XV"')
