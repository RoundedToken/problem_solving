// https://app.codility.com/programmers/lessons/16-greedy_algorithms/tie_ropes/
function solution(K, A) {
    let count = 0;
    let l = 0;
    for (let i = 0; i < A.length; i++) {
        l += A[i];
       if (l >= K) {
        count++;
        l = 0;
       }
    }
    return count
}
function main() {
    let K = 4;
    let A = [1, 2, 3, 4, 1, 1, 3];
    console.log(solution(K, A));
}
if (require.main === module) {
    main();
}