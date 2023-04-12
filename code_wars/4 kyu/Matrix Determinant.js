// https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript

function determinant(m) {
  function detFor2(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  function det(matrix, coff, sign) {
    let l = matrix.length;
    let tempD = 0;

    if (l === 2) {
      tempD = detFor2(matrix);
    } else {
      for (let i = 0; i < l; i++) {
        let newArray = [];

        for (let g in matrix) {
          for (let k in matrix) {
            if (g != 0 && k != i) newArray.push(matrix[g][k]);
          }
        }

        let newMatrix = [];

        for (let i = 0; i <= newArray.length - l + 1; i += l - 1)
          newMatrix.push(newArray.slice(i, i + l - 1));

        tempD += det(newMatrix, matrix[0][i], sign++);
      }
      sign = 0;
    }
    sign % 2 ? (coff *= -1) : (coff *= 1);
    tempD *= coff;

    return tempD;
  }

  if (m[0].length === 1) return m[0][0];
  else if (m[0].length === 2) return detFor2(m);
  else {
    return det(m, 1, 0);
  }
}
function main() {
  //   let m = [
  //     [2, 4, 2],
  //     [3, 1, 1],
  //     [1, 2, 0],
  //   ];
  // m = [
  //   [4, 6],
  //   [3, 8],
  // ];
  // m = [[1]];
  //   m = [
  //     [6, 1, 1],
  //     [4, -2, 5],
  //     [2, 8, 7],
  //   ];
  m = [
    [1, 2, 3, 4],
    [5, 0, 2, 8],
    [3, 5, 6, 7],
    [2, 5, 3, 1],
  ];
  console.log(determinant(m));
}
if (require.main === module) {
  main();
}
