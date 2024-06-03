// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/?envType=daily-question&envId=2024-06-03

var appendCharacters = function (s, t) {
    let ln = t.length;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[j]) {
            j++;
            ln--;
        }
    }
    return ln;
};
