// https://app.codility.com/programmers/lessons/8-leader/dominator/
function solution(A) {
    console.log(A);
    let size = 0;
    let value;
    let n = A.length;
    let condidate;
    let leader;
    let count = 0;
    for (let k = 0; k < n; k++) {
        if (size == 0) {
            size++;
            value = A[k];
        } else if (value != A[k]) {
            size--;
        } else {
            size++;
        }
    }
    condidate = -1;
    if (size > 0) {
        condidate = value;
    }
    leader = -1;
    for (let k = 0; k < n; k++) {
        if (A[k] == condidate) {
            index = k;
            count++;
        }
    }
    if (count > Math.floor(n / 2)) {
        leader = condidate;
    }
    let z = 0;
    if (n % 2 == 0) {
        if (n / 2 < count) {
            z = count - n / 2;
        }
    } else {
        if (parseInt(n / 2) + 1 < count) {
            z = count - parseInt(n / 2);
        }
    }
    if (A[0] == leader) {z++;}
    if (A[n - 1] == leader) {z++}
    return z;
}
function main() {
    let A = [4, 3, 4, 4, 2, 4, 4];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}