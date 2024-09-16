// https://leetcode.com/problems/minimum-time-difference/description/

var findMinDifference = function (timePoints) {
  timePoints.sort();
  let minPoints = timePoints.map((t) => Number(t[0] + t[1]) * 60 + Number(t[3] + t[4]));
  let min = Number.MAX_VALUE;
  for (let i = 1; i < minPoints.length; i++) {
    min = Math.min(minPoints[i] - minPoints[i - 1], min);
    if (min == 0) return min;
  }

  return Math.min(1440 - minPoints.pop() + minPoints[0], min);
};
