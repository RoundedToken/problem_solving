// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/?envType=daily-question&envId=2023-11-24

var maxCoins = function (piles) {
    const start = piles.length / 3;
    piles.sort((a, b) => a - b);
    let res = 0;
    for (let i = start; i < piles.length; i += 2) res += piles[i];
    return res;
};
