const RomanNumerals = {
  toRoman(number) {
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
  },
  fromRoman(number) {
    let value = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000],
    ]);
    let current = 1;
    let answer = 0;
    for (let i = number.length - 1; i >= 0; i--) {
      let x = value.get(number[i]);
      if (x > current) {
        current = x;
        answer += x;
      } else if (x == current) answer += x;
      else answer -= x;
    }
    return answer;
  },
};

function roman(num) {
  return RomanNumerals.fromRoman(num);
}

function main() {
  let num = "LVIII";
  console.log(roman(num));
}
if (require.main === module) {
  main();
}
