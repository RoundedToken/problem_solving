// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=daily-question&envId=2024-01-14

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < word1.length; i++) {
        obj1[word1[i]] = obj1[word1[i]] ? obj1[word1[i]] + 1 : 1;
        obj2[word2[i]] = obj2[word2[i]] ? obj2[word2[i]] + 1 : 1;
    }

    const letters = Object.keys(obj1).sort().join('') === Object.keys(obj2).sort().join('');
    const values = Object.values(obj1).sort().join('') === Object.values(obj2).sort().join('');

    return letters && values;
};
