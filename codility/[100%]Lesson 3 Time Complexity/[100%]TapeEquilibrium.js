// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
function solution(A) {
    /*let L = A.length;
    let P = 0;
    let PMin = Number.MAX_VALUE;
    for (let g = 1; g < L; g++) {
        let chunkL = A.slice(0, g);
        let chunkR = A.slice(g, L);
        let LchL = chunkL.length;
        let LchR = chunkR.length;
        let sumR = 0;
        let sumL = 0;
        for (let i = 0; i < LchL; i++) {
            sumL += chunkL[i];
        }
        for (let i = 0; i < LchR; i++) {
            sumR += chunkR[i];
        }
        P = Math.abs(sumL - sumR);
        if (P < PMin) { PMin = P };
    }
    return PMin;*/
    let L = A.length;
    let sumL = A[0];
    let sumR = 0;
    for (let i = 1; i < L; i++) {
        sumR += A[i];
    }
    let Pmin = Math.abs(sumL - sumR);
    for (let i = 2; i < L; i++) {
        sumL += A[i - 1];
        sumR -= A[i - 1];
        let P = Math.abs(sumL - sumR);
        if (P < Pmin) { Pmin = P};
    }
    return Pmin;
}
function main() {
    let A = [-10, 2000];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}