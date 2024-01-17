// https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=daily-question&envId=2024-01-17

var uniqueOccurrences = function (arr) {
    let map = {};

    for (let i of arr) {
        map[i] ? map[i]++ : (map[i] = 1);
    }

    let values = Object.values(map);
    let uniqueValues = [...new Set(values)];
    return values.length === uniqueValues.length;
};
