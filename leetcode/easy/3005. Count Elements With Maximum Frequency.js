// https://leetcode.com/problems/count-elements-with-maximum-frequency/description/?envType=daily-question&envId=2024-03-08

var maxFrequencyElements = function (nums) {
    let map = {};
    let result = 0;
    for (const iterator of nums) {
        map[iterator] = (map[iterator] || 0) + 1;
    }
    let fre = Object.values(map);
    highestFreq = Math.max(...fre);

    for (let i = 0; i < fre.length; i++) {
        if (fre[i] === highestFreq) {
            result = result + highestFreq;
        }
    }
    return result;
};
