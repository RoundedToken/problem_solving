// https://leetcode.com/problems/is-subsequence/?envType=daily-question&envId=2023-09-22

var isSubsequence = function (s, t) {
    if (s === '') return true;
    let currentInd = 0;
    let currentChar = s[currentInd];
    const l = s.length;

    for (const char of t) {
        if (char === currentChar) {
            currentInd++;
            currentChar = s[currentInd];
        }

        if (currentInd === l) return true;
    }

    return false;
};
