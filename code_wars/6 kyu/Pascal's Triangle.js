// https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript

function pascalsTriangle(n) {
    const triangle = [[1], [1, 1]];
    if (n === 1) return triangle[0];
    if (n === 2) return [1, 1, 1];

    for (let i = 0; i < n - 2; i++) {
        const line = [];
        for (let g = 0; g < triangle.at(-1).length - 1; g++)
            line.push(triangle.at(-1)[g] + triangle.at(-1)[g + 1]);
        line.push(1);
        line.unshift(1);
        triangle.push(line);
    }
    return triangle.flat();
}

function main() {
    console.log(pascalsTriangle(6));
}
if (require.main === module) {
    main();
}
