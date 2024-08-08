// https://leetcode.com/problems/spiral-matrix-iii/description/

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let size = rows * cols;
  let result = [];
  result.push([rStart, cStart]);

  let rdown = 1,
    leftup = 2;

  let r = rStart,
    c = cStart;
  while (result.length < size) {
    for (let i = 0; i < directions.length; i++) {
      if (i <= 1) {
        for (let j = 0; j < rdown; j++) {
          r += directions[i][0];
          c += directions[i][1];

          if (r >= 0 && r < rows && c >= 0 && c < cols) {
            result.push([r, c]);
          }
        }
      } else {
        for (let j = 0; j < leftup; j++) {
          r += directions[i][0];
          c += directions[i][1];

          if (r >= 0 && r < rows && c >= 0 && c < cols) {
            result.push([r, c]);
          }
        }
      }
    }

    rdown += 2;
    leftup += 2;
  }

  return result;
};
