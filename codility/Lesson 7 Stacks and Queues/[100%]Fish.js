// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
function solution(A, B) {
    let L = A.length;
    let C = [];
    let D = [];
    for (let i = L - 1; i >= 0; i--) {
        if ((((B[i] == 1) && (C.length == 0))) || ((B[i] == 1) && (C[C.length - 1] == 1))) {
            C.push(B[i]);
            D.push(A[i]);
        } else if (B[i] == 0) {
            C.push(B[i]);
            D.push(A[i]);
        } else if ((B[i] == 1) && (A[i] > D[D.length - 1])) {
            while ((A[i] > D[D.length - 1]) && (C[C.length - 1] == 0)) {
                C.pop();
                D.pop();
            }
            if ((C.length == 0) || (C[C.length - 1] == 1)) {
                C.push(B[i]);
                D.push(A[i]);
            }
        }

    }
    return C.length;
}
function main() {
    let A = [8, 6, 5, 3, 2, 4, 7];
    let B = [1, 1, 1, 0, 0, 1, 1];
    console.log(solution(A, B));
}
if (require.main === module) {
    main();
}