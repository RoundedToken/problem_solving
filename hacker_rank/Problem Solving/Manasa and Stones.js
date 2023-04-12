function stones(n, a, b) {
    let solution = new Set();
    for (let i = 0; i < n; i++) {
        solution.add(a * (n - 1 - i) + b * i);
    }
    solution = Array.from(solution)
    solution.sort(function (a, b) { return a - b })
    return solution
}
function main() {
    let n = 73;
    let a = 25;
    let b = 25;
    console.log(stones(n, a, b));
}
if (require.main === module) {
    main();
}