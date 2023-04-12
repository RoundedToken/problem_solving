// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

function transpose(matrix) {
    const trans = Array(matrix[0].length)
        .fill()
        .map(() => Array(matrix.length).fill());

    for (let row in matrix) {
        for (let col in matrix[0]) {
            trans[col][row] = matrix[row][col];
        }
    }
    return trans;
}

function main() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
    ];
    console.log(transpose(matrix));
}
if (require.main === module) {
    main();
}
