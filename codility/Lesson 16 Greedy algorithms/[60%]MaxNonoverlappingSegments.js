// https://app.codility.com/programmers/lessons/16-greedy_algorithms/max_nonoverlapping_segments/
function solution(A, B) {
    let l = A.length
    let max = 0;
    for (let i = 0; i < l; i++) {
        if (i >= l - max) break
        let count = 1;
        let end = B[i];
        for (let g = i + 1; g < l; g++) {
            let start = A[g];
            if (start > end) {
                count++;
                end = B[g];
            }
        }
        console.log(i)
        if (count > max) max = count;
        count = 1;
    }
    return max;
}
function main() {
    let A = [1, 3, 7, 9, 9];
    let B = [5, 6, 8, 9, 10];
    console.log(solution(A, B));
}
if (require.main === module) {
    main();
}