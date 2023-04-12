// https://www.hackerrank.com/challenges/game-of-stones-1/problem?isFullScreen=true
function gameOfStones(n) {
    if (n == 1) return "Second"
    if (n % 7 == 0 || n % 7 == 1) return "Second"
    else return "First"

}
function main() {
    
    console.log();
}
if (require.main === module) {
    main();
}