// https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/

var minGroups = function (intervals) {
  const starts = intervals.map((el) => el[0]).sort((a, b) => a - b);
  const ends = intervals.map((el) => el[1]).sort((a, b) => a - b);
  let room = 0;
  let endIdx = 0;
  for (i = 0; i < starts.length; i++) {
    if (starts[i] <= ends[endIdx]) {
      room++;
    } else {
      endIdx++;
    }
  }
  return room;
};
