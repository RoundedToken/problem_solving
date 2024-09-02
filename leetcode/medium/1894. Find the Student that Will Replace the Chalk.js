// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/description/

var chalkReplacer = function (chalk, k) {
  const sum = chalk.reduce((r, c) => r + c, 0);

  k %= sum;

  for (let i = 0; i < chalk.length; i++) {
    if (chalk[i] > k) {
      return i;
    }

    k -= chalk[i];
  }
};
