// https://leetcode.com/problems/number-of-senior-citizens/description/

var countSeniors = function (details) {
  let count = 0;
  for (let i = 0; i < details.length; i++) {
    let age = parseInt(details[i].slice(11, 13));
    if (age > 60) {
      count++;
    }
  }
  return count;
};
