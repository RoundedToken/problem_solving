// https://leetcode.com/problems/count-number-of-teams/description/

const numTeams = function (rating) {
  let res = 0;
  for (let i = 1; i < rating.length - 1; i++) {
    let smallerLeft = 0;
    let greaterRight = 0;
    let smallerRight = 0;
    let greaterLeft = 0;
    for (let j = 0; j < i; j++) {
      if (rating[j] < rating[i]) {
        smallerLeft++;
      }
      if (rating[j] > rating[i]) {
        greaterLeft++;
      }
    }
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        greaterRight++;
      }
      if (rating[j] < rating[i]) {
        smallerRight++;
      }
    }
    res += greaterRight * smallerLeft + greaterLeft * smallerRight;
  }
  return res;
};
