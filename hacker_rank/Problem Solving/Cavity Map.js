// https://www.hackerrank.com/challenges/cavity-map/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function cavityMap(grid) {
    let l = grid.length;
    if (l < 3) { return grid }
    for (let i = 1; i < l - 1; i++) {
        for (let g = 1; g < l - 1; g++) {
            if (
                grid[i].charAt(g) > grid[i - 1].charAt(g) &&
                grid[i].charAt(g) > grid[i + 1].charAt(g) &&
                grid[i].charAt(g) > grid[i].charAt(g - 1) &&
                grid[i].charAt(g) > grid[i].charAt(g + 1)
            ) { grid[i] = grid[i].slice(0, g).concat("X").concat(grid[i].slice(g + 1, l)) }
        }
    }
    return grid
}
function main() {
    let grid = ['1112', '1912', '1892', '1234']
    console.log(cavityMap(grid));
}
if (require.main === module) {
    main();
}