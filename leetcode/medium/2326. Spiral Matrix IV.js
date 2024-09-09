// https://leetcode.com/problems/spiral-matrix-iv/description/

var spiralMatrix = function (m, n, head) {
  let r = 0,
    c = 0,
    dr = 0,
    dc = 1,
    matrix = Array(m)
      .fill(-1)
      .map((_) => Array(n).fill(-1));

  const need2swap = () => r + dr < 0 || r + dr >= m || c + dc < 0 || c + dc >= n || matrix[r + dr][c + dc] != -1;

  while (head) {
    matrix[r][c] = head.val;
    if (need2swap()) {
      const temp = dc;
      dc = -dr;
      dr = temp;
    }
    r += dr;
    c += dc;
    head = head.next;
  }
  return matrix;
};
