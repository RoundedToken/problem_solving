// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
function solution(A) {
    let L = A.length;
    let K = 0;
    let Z = 0;
    if (L == 1) { return K }
    for (let i = 0; i < L; i++) {
        /*if (A[i] == 0) {
            for (let g = (i + 1); g < L; g++) {
                if (A[i] != A[g]) {
                    K++;
                }
            }
        }
    }*/
        if (A[i] == 0) {
            Z++;
        } else {
            K = K + 1 * Z;
        }
    }
    if (K > 1000000000) { return -1 }
    return K;

}
function solution2(A) {
    let L = A.length - 1;
    let B = [];
    let K = 0;
    B[L] = A[L];
    for (let i = L - 1; i >= 0; i--) {
        B[i] = A[i] + B[i + 1];
    }
    console.log(B);
    for (let i = 0; i <= L; i++) {
        if (A[i] == 0) {
            K += B[i];
        }
    }
    if (K > 1000000000) { return -1 }
    return K;
}
function main() {
    let A = [0, 1, 0, 1, 1];
    let A1 = [0];
    console.log(solution2(A));
}
if (require.main === module) {
    main();
}