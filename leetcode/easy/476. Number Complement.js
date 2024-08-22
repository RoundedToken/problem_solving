// https://leetcode.com/problems/number-complement/description/

var findComplement = function (num) {
  let mask = 1;
  while (mask < num) mask = (mask << 1) | 1;
  return num ^ mask;
};
