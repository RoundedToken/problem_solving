// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// main.js / main.ts (the filename doesn't matter)
function rotation(A, K) {
  let length = A.length;
  let b1 = [];
  let a1 = [];
  for (let g = 1; g <= K; g++) {
    if (g % 2 != 0) {
      b1[0] = A[length - 1];
      for (let i = 1; i < length; i++) {
        b1[i] = A[i - 1];
      }
      a1 = b1;
    } else {
      A[0] = b1[length - 1];
      for (let i = 1; i < length; i++) {
        A[i] = b1[i - 1];
      }
      a1 = A;
    }
  }
  return a1;
}
function rotation2(A, K) {
  for (let g = 0; g < K; g++) {
    rot1r(A);
  }
  return A;
}
function rot1r(A) {
  let length = A.length;
  let x = A[length - 1];
  for (let i = 1; i < length; i++) {
    A[length - i] = A[length - (i + 1)];
  }
  A[0] = x;
}

function rotation3(A, K) {
  let B = [];
  let length = A.length;
  for (let i = 0; i < length; i++) {
    B[(i + K) % length] = A[i];
  }
  /*for (let i = 0; i < length; i++) {
    A[i] = B[i];
  }*/
  return B;
}
function main() {
  let a = [];
  let b;
  //b = rotation(a, 2);
  console.log(b);

  //b = rotation2(a, 2);
  console.log(b);
  b = rotation3(a, 2);
  console.log(b);
}
if (require.main === module) {
  main();
}