// https://app.codility.com/programmers/lessons/15-caterpillar_method/abs_distinct/
function solution(A) {
    let n = A.length;
    let head = 0;
    let tail = n - 1;
    let result = 1;
    let currMaxValue = Math.max(Math.abs(A[head]), Math.abs(A[tail]));
    if (A[head] == Number.MIN_VALUE)
        currMaxValue = Math.abs(A[head]);
    while (head <= tail) {
        let currHead = Math.abs(A[head]);
        if (currHead == currMaxValue) {
            head++;
            continue;
        }
        let currTail = Math.abs(A[tail]);
        if (currTail == currMaxValue) {
            tail--;
            continue;
        }
        if (currHead >= currTail) {
            currMaxValue = currHead;
            head++;
        } else {
            currMaxValue = currTail;
            tail--;
        }
        result++;
    }
    return result; 
}
function main() {
    let A = [-5, -3, -1, 0, 0, 3, 6, 6, 6]
    console.log(solution(A));
}
if (require.main === module) {
    main();
}