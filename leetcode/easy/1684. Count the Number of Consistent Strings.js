// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

var countConsistentStrings = function (allowed, words) {
  const re = new RegExp(`^[${allowed}]+$`);
  let count = 0;

  words.forEach((word) => {
    if (word.match(re)) count++;
  });

  return count;
};
