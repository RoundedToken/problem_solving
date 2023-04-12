// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
function solution(A) {
    let max_ending = 0;
    let max_slice = 0;
    let sum = -100000001;
    let x = 0;
    if (A[0] >= 0) {
        for (let i = 0; i < A.length; i++) {
            x = 1;
            max_ending = Math.max(0, max_ending + A[i]);
            max_slice = Math.max(max_slice, max_ending);
        }
    }
    if (A[0] < 0) {
        for (let i = 0; i < A.length; i++) {
            if ((A[i] < 0) && (x == 0)) {
                if (A[i] > sum) {
                    sum = A[i];
                }
            } else {
                x = 1;
                max_ending = Math.max(0, max_ending + A[i]);
                max_slice = Math.max(max_slice, max_ending);
            }
        }
    }
    if (x == 0) {
        return sum;
    } else { return max_slice}
}
function main() {
    let A = [ 0 ];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}