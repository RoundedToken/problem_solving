// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
function solution(A) {
    let start = 0;
    let currentSum = A[0] + A[1];
    let minAvgSlice = currentSum / 2;
    for (let i = 2; i < A.length; i++) {
        currentSum += A[i];
        let newAvg = currentSum / 3;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 2;
        }

        currentSum -= A[i - 2];
        newAvg = currentSum / 2;
        if (newAvg < minAvgSlice) {
            minAvgSlice = newAvg;
            start = i - 1;
        }
    }

    return start;
}
function main() {
    let A = [2, 1, 2, 1, 4, 5, 8];
    let B = [5, 6, 3, 4, 9];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}