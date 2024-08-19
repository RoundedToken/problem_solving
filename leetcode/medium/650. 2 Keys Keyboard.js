// https://leetcode.com/problems/2-keys-keyboard/description/

var minSteps = function (n) {
  if (n === 1) return 0;

  let steps = 0;
  let factor = 2;

  while (n > 1) {
    while (n % factor === 0) {
      steps += factor;
      console.log(steps, 's');
      n /= factor;
      console.log(n, 'n');
    }
    factor++;
    console.log(factor);
  }

  return steps;
};
