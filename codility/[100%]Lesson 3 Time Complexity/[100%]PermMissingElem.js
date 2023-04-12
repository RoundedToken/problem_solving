// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
function missElem(A) {
    let missing = 1
    A.sort( function (a, b) { return a - b });
    let l = A.length
    for (let i = 0; i < l; i++ ) {
        if (A[i] != missing) {
            break;
        }
        missing++;
    }
    return missing
}
function main() {
    let A = [];
    console.log(missElem(A));
}
if (require.main === module) {
    main();
}