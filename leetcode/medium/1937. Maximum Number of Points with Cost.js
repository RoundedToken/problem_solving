// https://leetcode.com/problems/maximum-number-of-points-with-cost/description/

maxPoints = (p) =>
  Math.max(
    ...p.reduce((a, r) =>
      a
        .reverse((a = 0))
        .map((x) => (a = a > x ? --a : x))
        .reverse((a = 0))
        .map((x, j) => (r[j] += a = a > x ? --a : x))
    )
  );
