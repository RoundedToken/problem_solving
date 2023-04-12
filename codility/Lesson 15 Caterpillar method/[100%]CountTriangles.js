// https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/
function solution(A) {
    let l = A.length;
    let count = 0;
    A.sort((a, b) => { return a - b })
    for (let i = 0; i < l - 2; i++) {
        let k = i + 2;
        for (let g = i + 1; g < l - 1; g++) {
            while (k < l && A[i] + A[g] > A[k]) { //&& A[i] + A[k] > A[g] && A[k] + A[g] > A[i]
                k++;
            }
            count += k - g - 1;
        }
    }
    return count;
}
function main() {
    let A = [10, 2, 5, 1, 8, 12];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}