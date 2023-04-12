// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
function solution(N, A) {
    let L = A.length;
    let B = [];
    let Bmax = 0;
    for (let i = 0; i < N; i++) {
        B[i] = 0;
    }
    for (let i = 0; i <= L; i++) {
        if ((1 <= A[i]) && (A[i] <= N)) {
            B[A[i] - 1] += 1;
            if (B[A[i] - 1] > Bmax) {
                Bmax = B[A[i] - 1];
            }
        } else if ((A[i] == (N + 1)) && (A[i + 1] != N + 1)) {
            for (let g = 0; g < N; g++) {
                B[g] = Bmax;
            }
        }
    }
    return B;
}
function main() {
    let A = [3, 4, 4, 6, 6, 6, 5];
    let N = 5;
    console.log(solution(N, A));
}
if (require.main === module) {
    main();
}