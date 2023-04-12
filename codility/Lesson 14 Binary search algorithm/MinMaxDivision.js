function solution(M, K, A) {
    let pSum = [0];
    for (let i = 0; i < A.length; i++) {
        pSum[i + 1] = pSum[i] + A[i];
    }
    let sumL = 0;
    let sumR = 0;
    for (let i = 0; i < A.length - K + 1; i++) {
        sumR = pSum[i];
        sumL = (pSum[pSum.length - 1] - sumR) / (K - 1);
        console.log(i, sumR, sumL)
        if (sumL < pSum[i + 1]) return Math.max(sumL, sumR)
       
    }
    return sumR
}
function main() {
    let K = 3;
    let M = 5;
    let A = [2, 1, 5, 1, 2, 2, 2];
    console.log(solution(M, K, A));
}
if (require.main === module) {
    main();
}