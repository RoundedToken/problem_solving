// https://leetcode.com/problems/eliminate-maximum-number-of-monsters/?envType=daily-question&envId=2023-11-07

var eliminateMaximum = function (dist, speed) {
    const roundsToEnd = [];
    for (let i = 0; i < dist.length; i++) {
        roundsToEnd[i] = Math.ceil(dist[i] / speed[i]);
    }
    roundsToEnd.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < roundsToEnd.length; i++) {
        if (roundsToEnd[i] <= i) {
            return i;
        }
    }
    return dist.length;
};
