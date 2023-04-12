// https://app.codility.com/programmers/lessons/6-sorting/distinct/
function solution(A) {
    A.sort(function (a, b) { return a - b });
    let K = 1;
    if (A.length == 0) { K = 0 }
    for (let i = 0; i < A.length; i++) {
        if (A[i + 1] > A[i]) {
            K++;
        }
    }
    return K;
}
function main() {
    let A = [1, 2, 3, 4, 0];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}