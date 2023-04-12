// https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true
function permutationEquation(p) {
    let solution = [];
    let B = [];
    for (let i = 1; i <= p.length; i++) {
        for (let g = 0; g < p.length; g++) {
            if (p[g] == i) {
                B[i - 1] = g + 1;
            }
        }
    }
    console.log(B);
    for (let i = 0; i < p.length; i++) {
        solution[i] = B[B[i] - 1];
    }
    return solution;
}
function main() {
}
if (require.main === module) {
    main();
}