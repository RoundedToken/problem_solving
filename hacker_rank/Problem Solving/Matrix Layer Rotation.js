// hackerrank.com/challenges/matrix-rotation-algo/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function matrixRotation(matrix, r) {
    console.table(matrix);
    let lRow = matrix.length;
    let lCol = matrix[0].length;
    let layers;
    if (lCol % 2 == 0 ) layers = lCol / 2;
    else layers = lRow / 2;
    let arrLayers = Array(layers)
    for (let i = 0; i < layers; i++) {
        arrLayers[i] = [];
    }
    function rotate(arr) {
        let l = arr.length;
        if (r % l != 0) {
            let rot = r % l;
            arr = arr.slice(l - rot, l).concat(arr.slice(0, l - rot))
            return arr
        }
        return arr
    }

    for (let g = 0; g < layers; g++) {

        let downPos = g;
        let rightPos = g + 1;
        let upPos = lRow - 2 - g;
        let leftPos = lCol - 2 - g;
        let downStop = lRow - g;
        let rightStop = lCol - g;
        let upStop = 0 + g;
        let leftStop = 0 + g;

        for (let i = downPos; i < downStop; i++) arrLayers[g].push(matrix[i][g]);
        for (let i = rightPos; i < rightStop; i++) arrLayers[g].push(matrix[lRow - 1 - g][i]);
        for (let i = upPos; i >= upStop; i--) arrLayers[g].push(matrix[i][lCol - 1 - g]);
        for (let i = leftPos; i > leftStop; i--) arrLayers[g].push(matrix[g][i]);

    }
    for (let i = 0; i < layers; i++) {
        arrLayers[i] = rotate(arrLayers[i])
    }
    for (let g = 0; g < layers; g++) {

        let downPos = g;
        let rightPos = g + 1;
        let upPos = lRow - 2 - g;
        let leftPos = lCol - 2 - g;
        let downStop = lRow - g;
        let rightStop = lCol - g;
        let upStop = 0 + g;
        let leftStop = 0 + g;

        let index = 0

        for (let i = downPos; i < downStop; i++) {
            matrix[i][g] = arrLayers[g][index];
            index++;
        }
        for (let i = rightPos; i < rightStop; i++) {
            matrix[lRow - 1 - g][i] = arrLayers[g][index];
            index++;
        }
        for (let i = upPos; i >= upStop; i--) {
            matrix[i][lCol - 1 - g] = arrLayers[g][index];
            index++;
        }
        for (let i = leftPos; i > leftStop; i--) {
            matrix[g][i] = arrLayers[g][index];
            index++;
        }

    }
    for (let i = 0; i < lRow; i++) {
        console.log(matrix[i].join(" "))
    }
    console.table(matrix)
}
function main() {
    let matrix = [
        [1, 2, 3, 4],
        [7, 8, 9, 10],
        [13, 14, 15, 16],
        [19, 20, 21, 22],
        [25, 26, 27, 28]
    ];
    let r = 2;
    console.log(matrixRotation(matrix, r));
}
if (require.main === module) {
    main();
}