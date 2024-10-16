// https://leetcode.com/problems/longest-happy-string/description/

var longestDiverseString = function (a, b, c) {
  let countA = 0;
  let countB = 0;
  let countC = 0;
  const result = [];
  while (a > 0 || b > 0 || c > 0) {
    if ((a >= b && a >= c && countA < 2) || (countB === 2 && a > 0) || (countC === 2 && a > 0)) {
      result.push('a');
      countA += 1;
      a -= 1;
      countB = 0;
      countC = 0;
    } else if ((b >= a && b >= c && countB < 2) || (countA === 2 && b > 0) || (countC === 2 && b > 0)) {
      result.push('b');
      countB += 1;
      b -= 1;
      countA = 0;
      countC = 0;
    } else if ((c >= a && c >= b && countC < 2) || (countB === 2 && c > 0) || (countA === 2 && c > 0)) {
      result.push('c');
      countC += 1;
      c -= 1;
      countA = 0;
      countB = 0;
    } else {
      break;
    }
  }

  return result.join('');
};
