// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution(A) {
    A.sort(function (a, b) { return a - b });
    let L = A.length;
    let Miss = 0;
    console.log(A);
    if (A[L - 1] <= 0) {
        return 1;
    }
    let K = 0;
    for (let i = 0; i < L; i++) {
        if (A[i] < 1) {
            continue;
        } if ((A[i] != 1) && (K < 1)) {
            return 1;
        } else if ((A[i] == A[i + 1]) || (A[i] == (A[i + 1] - 1))) {
            K += 1;
            continue;
        } else {
            Miss = (A[i] + 1);
            return Miss;
        }
    }
}
function main() {
    let A = [1, 3, 6, 4, 1, 2];
    let A1 = [1, 2, 3];
    let A2 = [-1, -3];
    let A3 = [2, 4, 5, 6];
    console.log(solution(A3));
}
if (require.main === module) {
    main();
}