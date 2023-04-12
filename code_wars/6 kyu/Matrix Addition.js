// https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b) {
    for (let row in b) {
        for (let col in a) {
            a[row][col] += b[row][col];
        }
    }
    return a;
}

function main() {
    let a = [
        [1, 2, 3],
        [3, 2, 1],
        [1, 1, 1],
    ];
    let b = [
        [2, 2, 1],
        [3, 2, 3],
        [1, 1, 3],
    ];
    console.log(matrixAddition(a, b));
}
if (require.main === module) {
    main();
}
