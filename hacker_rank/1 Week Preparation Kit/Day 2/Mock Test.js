function flippingMatrix(matrix) {
    let sum = 0;
    console.log(matrix)
    let n = matrix.length / 2; let l = matrix.length - 1; for (let i = 0; i < n; i++) {
        for (let g = i; g < n; g++) {
            sum += Math.max(matrix[i][g], matrix[i][l - g], matrix[l - i][l -
                g], matrix[l - i][g]);
            if (g != i) {
                sum += Math.max(matrix[g][i], matrix[l - g][i], matrix[l - g][l - i], matrix[g][l - i]);
            }
        }
    }
    return sum;
}
function main() {
}
if (require.main === module) {
    main();
}