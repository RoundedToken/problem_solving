// https://www.hackerrank.com/challenges/a-chessboard-game-1/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
function chessboardGame(x, y) {
    let tx = x % 4
    let ty = y % 4
    if (tx === 0 || ty === 0 || tx === 3 || ty === 3) {
        return "First"
    }
    return "Second"
}
function main() {
    
    console.log(chessboardGame(x, y));
}
if (require.main === module) {
    main();
}