// https://leetcode.com/problems/walking-robot-simulation/description/

robotSim = (c, o, d = 0, x = 0, y = 0) => (
  o.forEach(([x, y]) => (o[x + '|' + y] = 1), {}),
  c.reduce(
    (m, c) =>
      c < 0
        ? ((d += 1 - 2 * c), (d %= 4), m)
        : ([...Array(c)].some((u) => ((u = [x, y]), (x += [0, -1, 0, 1][d]), (y += [1, 0, -1, 0][d]), o[x + '|' + y] && ([x, y] = u))),
          (c = x * x + y * y),
          m < c ? c : m),
    0
  )
);
