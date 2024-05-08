// https://leetcode.com/problems/relative-ranks/description/?envType=daily-question&envId=2024-05-08

var findRelativeRanks = function (score) {
    const ranks = ['Bronze Medal', 'Silver Medal', 'Gold Medal'];

    const results = [];

    const arr = [...score];
    arr.sort((a, b) => b - a);

    for (let i = 0; i < score.length; ++i) {
        let index = score.indexOf(arr[i]);
        if (ranks.length !== 0) {
            results[index] = ranks.pop();
        } else {
            results[index] = `${i + 1}`;
        }
    }

    return results;
};
