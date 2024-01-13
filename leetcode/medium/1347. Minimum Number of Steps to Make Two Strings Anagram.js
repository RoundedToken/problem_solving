//https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/?envType=daily-question&envId=2024-01-13

var minSteps = function (s, t) {
    let hashMap = {};
    for (let letter of s) {
        if (hashMap[letter]) hashMap[letter]++;
        else hashMap[letter] = 1;
    }
    let changes = 0;
    for (let letter of t) {
        if (hashMap[letter]) hashMap[letter]--;
        else changes++;
    }
    return changes;
};
