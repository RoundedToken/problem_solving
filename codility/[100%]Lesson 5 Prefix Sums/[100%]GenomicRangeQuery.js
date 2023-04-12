// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
function solution(S, P, Q) {
    function makeArray(arr, n) {
        let res = [];
        res[0] = 0;
        for (let i = 0; i < arr.length; i++) {
            res[i + 1] = res[i];
            if (arr[i] == n) {
                res[i + 1]++;
            }
        }
        return res;
    }
    let A = Array.from(S);
    let L = A.length;
    let B = [];
    for (let i = 0; i < L; i++) {
        if (A[i] == 'A') { A[i] = 1 } else
            if (A[i] == 'C') { A[i] = 2 } else
                if (A[i] == 'G') { A[i] = 3 } else { A[i] = 4 }
    }
    let Z1 = makeArray(A, 1);
    let Z2 = makeArray(A, 2);
    let Z3 = makeArray(A, 3);
    for (let i = 0; i < P.length; i++) {
        let sum1 = (Z1[Q[i] + 1] - Z1[P[i]]);
        let sum2 = (Z2[Q[i] + 1] - Z2[P[i]]);
        let sum3 = (Z3[Q[i] + 1] - Z3[P[i]]);
        if (sum1 > 0) {
            B[i] = 1;
        } else if (sum2 > 0) {
            B[i] = 2;
        } else if (sum3 > 0) {
            B[i] = 3;
        } else { B[i] = 4 }
    }
    return B;
}
function test1() {
    let T = [1, 3, 2, 4, 1, 1, 2, 3, 4];
    console.log(makeArray(T, 1));
    console.log(makeArray(T, 2));
}
function main() {
    //test1(); 
    let S = "CAGCCTA";
    let P = [2, 5, 0];
    let Q = [4, 5, 6];
    console.log(solution(S, P, Q));
}
if (require.main === module) {
    main();
}