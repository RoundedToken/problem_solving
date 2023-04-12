// https://www.codewars.com/kata/57c535f82b8520076700017d/train/javascript

function findMatrixIn(matrix) {
  function check(matrix) {
    let oneCount = 0;
    let zeroCount = 0;

    for (let i of matrix) {
      for (let g of i) {
        g === 0 ? zeroCount++ : oneCount++;
      }
    }
    if (zeroCount === oneCount) return matrix;
    else return [];
  }

  let oneCount = 0;
  let zeroCount = 0;
  let m = [];
  let l = matrix.length;

  for (let i of matrix) {
    for (let g of i) {
      g === 0 ? zeroCount++ : oneCount++;
    }
  }
  console.log(zeroCount, oneCount);
  if (zeroCount === oneCount) return matrix;
  else {
    for (let i = 0; i < l - 1; i++) {
      for (let g = 0; g < l - 1; g++) {
        let newMatrix = [];

        for (let k = i; k < l - 1 + i; k++) {
          newMatrix.push(matrix[k].slice(g, g + (l - 1)));
        }

        m = check(newMatrix);
        if (m.length > 0) return m;
      }
    }
  }
  return m;
}

function main() {
  matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  ];
  //   matrix = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9],
  //   ];
  console.log(findMatrixIn(matrix));
}
if (require.main === module) {
  main();
}

// matrix=[
//     [1,1,1],
//     [0,0,0],
//     [1,1,1]
//     ]
//     findMatrixIn(matrix)  should return:
//     [
//     [1,1],
//     [0,0]
//     ]

//     matrix=[
//     [1,1,1,0],
//     [0,0,0,1],
//     [1,1,1,0],
//     [0,0,0,1]
//     ]
//     findMatrixIn(matrix)  should return:
//     [
//     [1,1,1,0],
//     [0,0,0,1],
//     [1,1,1,0],
//     [0,0,0,1]
//     ]
//     (the matrix self)

//     matrix=[
//     [1,1,0,1,0],
//     [1,0,1,0,1],
//     [1,1,0,1,0],
//     [1,0,1,0,1],
//     [1,1,1,1,1]
//     ]
//     findMatrixIn(matrix)  should return:
//     [
//     [1,0,1,0],
//     [0,1,0,1],
//     [1,0,1,0],
//     [0,1,0,1]
//     ]

//     matrix=[
//     [1,1,1],
//     [0,1,0],
//     [1,1,1]
//     ]
//     findMatrixIn(matrix)  should return:[]
