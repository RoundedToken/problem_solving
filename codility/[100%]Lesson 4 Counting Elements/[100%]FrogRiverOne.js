// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
function solution(X, A) {
    let B = [];
    let L = A.length;
    let K = 0;
    for (let i = 0; i < L; i++) {
        if (B[A[i] - 1] == undefined) {
            B[A[i] - 1] = A[i];
            K++
        }
        if (K == X) { return i };
    }
    if (K < X) { return -1};
}
function main() {
    let A = [1];
    let X = 1;
    console.log(solution(X, A));
}
if (require.main === module) {
    main();
}