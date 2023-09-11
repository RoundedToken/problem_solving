// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

var balancedStringSplit = function (s) {
    let lCount = 0;
    let rCount = 0;
    let count = 0;

    for (const char of s) {
        char === 'L' ? lCount++ : rCount++;

        if (lCount === rCount) {
            count++;
            lCount = 0;
            rCount = 0;
        }
    }

    return count;
};
