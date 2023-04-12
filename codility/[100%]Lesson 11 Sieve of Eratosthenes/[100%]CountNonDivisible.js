// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
function solution(A) {
    let l = A.length;
    let B = Array(l * 2 + 1).fill(l);
    
    let C = [];
    for (let i in A) {
        if (C[A[i]] == undefined) C[A[i]] = [A[i], 1];
        else C[A[i]][1]++
    }
    let count = 0;
    if (C[1] != undefined) count = C[1][1];
    for (let i = 2; i < C.length; i++) {
        if (C[i] == undefined) continue
        else {
            for (let g = C[i][0]; g < B.length; g += C[i][0]) {
                B[g] -= C[i][1];
            }
        }
    }
    for (let i in A) {
        if (A[i] == 1) A[i] = l - count;
        else A[i] = B[A[i]] - count;
    }
    return A
    console.table(B)
    console.log(A)
    
}
function main() {
    let A = [
        6,  7, 2, 1, 4,
        7,  4, 4, 1, 8,
       10, 15
     ];
    //  [
    //     8, 8, 9, 10, 6,
    //     8, 6, 6, 10, 5,
    //     8, 9
    //   ]
    console.log(solution(A));
}
if (require.main === module) {
    main();
}