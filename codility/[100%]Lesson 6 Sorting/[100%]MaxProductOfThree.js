// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
function solution(A) {
    A.sort(function (a, b) { return a - b });
    console.log(A);
    let i = 0;
    let sol = 0;
    let L = A.length;
    while (A[i] < 0) {
        i++;
    }
    console.log(i);
    if ((i % 2) != 0) {
      sol = A[L - 1] * A[L - 2] * A[L - 3];
    }  else if ((A[0] * A[1] * A[L - 1]) > (A[L - 1] * A[L - 2] * A[L - 3])) {
        sol = A[0] * A[1] * A[L - 1];
    } else { sol = A[L - 1] * A[L - 2] * A[L - 3]}
    return sol;
}
function main() {
    let A = [-3, 1, 2, -2, 5, 6];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}