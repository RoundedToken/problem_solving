// https://app.codility.com/programmers/lessons/6-sorting/triangle/
function solution(A) {
    A.sort(function (a, b) { return a - b });
    console.log(A);
    for (let i = 0; i < A.length - 2; i++) {
        if ((A[i] + A[i + 1] > A[i +2]) && (A[i + 1] + A[i + 2] > A[i]) && (A[i] + A[i + 2] > A[i +1])) {
            return 1;
        }
    }
    return 0;
}
function main() {
    let A = [-100, 2, 4 ,5];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}