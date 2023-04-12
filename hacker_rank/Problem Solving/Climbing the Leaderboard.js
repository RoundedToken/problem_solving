// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true
function climbingLeaderboard(ranked, player) {
    ranked = Array.from(new Set(ranked));
    let rankedNumber = [];
    let count = 0;
    let solution = [];
    for (let i = 0; i < ranked.length; i++) {
        if (ranked[i] != ranked[i - 1]) {
            count++;
            rankedNumber[i] = count
        } else if (ranked[i] == ranked[i - 1]) {rankedNumber[i] = count}
    }
    let b = 0;
    for (let i = 0; i < player.length; i++) {
        for (let g = ranked.length - 1 - b; g >= 0; g--) {
            if (player[i] < ranked[g]) {
                solution[i] = rankedNumber[g] + 1;
                b = ranked.length - g - 2;
                break;
            } else if (player[i] == ranked[g]) {
                solution[i] = rankedNumber[g];
                b = ranked.length - g - 1;
                break;
            } 
            solution[i] = 1;
        }
    } 
    return solution;
}
function main() {
}
if (require.main === module) {
    main();
}