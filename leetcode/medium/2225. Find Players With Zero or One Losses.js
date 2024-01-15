// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/?envType=daily-question&envId=2024-01-15

var findWinners = function (matches) {
    let lost = {};
    for (let [winner, loser] of matches) {
        lost[winner] = lost[winner] || 0;
        lost[loser] = (lost[loser] || 0) + 1;
    }
    let res = [[], []];
    for (let player in lost) {
        if (lost[player] === 0) res[0].push(+player);
        else if (lost[player] === 1) res[1].push(+player);
    }
    return res;
};
