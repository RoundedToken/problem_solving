// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/?envType=daily-question&envId=2024-01-03

var numberOfBeams = function (bank) {
    return bank
        .map((str) => str.split('0').join('').length)
        .filter((val) => val !== 0)
        .reduce((acc, cur, ind, arr) => acc + cur * (arr[ind + 1] || 0), 0);
};
