// https://leetcode.com/problems/minimum-window-substring/description/?envType=daily-question&envId=2024-02-04

var minWindow = function (s, t) {
    let result = '';
    let leftPtr = 0;
    let rightPtr = 0;
    let windowCountMap = {};
    let tMap = {};
    for (let i = 0; i < t.length; i++) {
        tMap[t[i]] = (tMap[t[i]] || 0) + 1;
    }
    while (rightPtr < s.length) {
        windowCountMap[s[rightPtr]] = (windowCountMap[s[rightPtr]] || 0) + 1;
        while (isMatch(windowCountMap, tMap)) {
            let currentSubstr = s.slice(leftPtr, rightPtr + 1);
            if (result === '' || result.length > currentSubstr.length) {
                result = currentSubstr;
            }
            windowCountMap[s[leftPtr]]--;
            leftPtr++;
        }

        rightPtr++;
    }

    return result;
};

function isMatch(windowMap, tMap) {
    for (let character in tMap) {
        if (!(character in windowMap) || windowMap[character] < tMap[character]) return false;
    }
    return true;
}
