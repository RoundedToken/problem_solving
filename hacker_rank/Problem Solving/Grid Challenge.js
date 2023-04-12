// https://www.hackerrank.com/challenges/grid-challenge/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function gridChallenge(grid) {
    let lRow = grid.length;
    let lCol = grid[0].length;
    for (let i = 0; i < lRow; i++) {
        grid[i] = Array.from(grid[i]);
    }
    for (let i = 0; i < lRow; i++) {
        grid[i].sort()
    }
    for (let i = 0; i < lCol; i++) {
        for (let g = 1; g < lRow; g++) {
            if (grid[g][i] < grid[g - 1][i]) return "NO"
        }
    }
    return "YES"
}
function main() {
    
    console.log(gridChallenge(grid));
}
if (require.main === module) {
    main();
}