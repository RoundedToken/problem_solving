// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
function solution(A) {
    A.sort(function (a, b) { return a - b });
    let L = A.length;
    let r = 0;
    for (let i = 0; i < L; i++) {
        if (A[i] == (i + 1)) { r = 1 } else {
            r = 0;
            return r;
        }
    }
    return r;
}
function main() {
    let A = [1];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}