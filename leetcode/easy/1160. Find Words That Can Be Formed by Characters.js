// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/?envType=daily-question&envId=2023-12-02

var countCharacters = function (words, chars) {
    let res = 0;
    for (let word of words) {
        if (word.length > chars.length) continue;
        if (isGoodString(word, chars)) res += word.length;
    }
    return res;
};

var isGoodString = function (word, chars) {
    let arr = chars.split('');
    for (let char of word) {
        let idx = arr.indexOf(char);
        if (idx === -1) return false;
        else arr[idx] = '';
    }
    return true;
};
