// https://leetcode.com/problems/rank-transform-of-an-array/description/

const arrayRankTransform = (arr) => {
  const ranks = [...new Set(arr)].sort((a, b) => a - b).reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map());
  return arr.map((n) => ranks.get(n));
};
