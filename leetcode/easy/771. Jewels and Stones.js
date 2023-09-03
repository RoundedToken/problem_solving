// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    const set = new Set(jewels.split(''));

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) count++;
    }

    return count;
};
