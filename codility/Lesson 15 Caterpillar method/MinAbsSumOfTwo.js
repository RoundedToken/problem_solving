
// https://app.codility.com/programmers/lessons/15-caterpillar_method/min_abs_sum_of_two/
function solution(A) {
    A.sort((a, b) => { return a - b })
    console.log(A)
}
function main() {
    let A = [-8, 4, 5, -10, 3];
    console.log(solution(A));
}
if (require.main === module) {
    main();
}