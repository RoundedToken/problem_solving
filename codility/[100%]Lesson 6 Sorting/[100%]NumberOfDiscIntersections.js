// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
function solution(A) {
    function sortAsc(a, b) {
        return (a - b)
    }

    let counter = 0, j = 0;
    let lower = [];
    let upper = []

    for (let i = 0; i < A.length; i++) {
        lower[i] = i - A[i];
        upper[i] = i + A[i];
    }

    lower.sort(sortAsc)
    upper.sort(sortAsc)

    for (let i = 0; i < A.length; i++) {
        while (j < A.length && upper[i] >= lower[j]) {
            counter += j - i;
            j++;
        }
        if (counter > 10000000) return -1;
    }

    return counter;
}
function main() {
    let A = [1, 5, 2, 1, 4, 0];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}