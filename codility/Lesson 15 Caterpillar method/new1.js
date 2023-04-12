// https://app.codility.com/programmers/lessons/15-caterpillar_method/count_distinct_slices/
function solution(A, M) {
    let count = 0;
    let s = Array(M);
    let l = A.length;
    let index = 0;
    for (let i = 0; i < l; i++) {
        if (s[A[i]] == undefined || s[A[i]] < index) {
            s[A[i]] = i;
        } else {
            count += (i - s[A[i]] - 1) * (i - s[A[i]]) / 2;
            if (A[i] == A[i - 1]) count += (i - index) * (i - index + 1) / 2
            index = s[A[i]] + 1;
            s[A[i]] = i
        }
        if (i == l - 1) count += (l - index) * (l - index + 1) / 2
        if (count > 1000000000) return 1000000000
        console.log(s, count, i, index)
    }
    return count
}
function main() {
    let M = 5
    let A = [ 1, 3, 4, 1, 2, 1, 3, 2, 1];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}