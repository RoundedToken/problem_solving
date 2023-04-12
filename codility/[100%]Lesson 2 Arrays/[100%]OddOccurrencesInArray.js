// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
function sortArray(A) {
    A.sort(function (a, b) { return a - b });
    let L = A.length;
    for (let i = 0; i < (L - 2); i += 2) {
        if (A[i] == A[i + 1]) {
            continue;
        } else {
            return A[i];
            break;
        }
    }
    return A[L - 1];
}
function main() {
    let A = [1, 3, 5, 5, 3, 1, 9];
    let B = [7, 9, 7];
    let C = [9, 7, 7, 3, 5, 11, 11, 3, 5];
    let D = [9];
    let E = [11, 9, 15, 15, 17, 17, 11];
    console.log(sortArray(A));
    console.log(sortArray(B));
    console.log(sortArray(C));
    console.log(sortArray(D));
    console.log(sortArray(E));
}
if (require.main === module) {
    main();
}