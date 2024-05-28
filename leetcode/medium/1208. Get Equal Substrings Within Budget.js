// https://leetcode.com/problems/get-equal-substrings-within-budget/description/?envType=daily-question&envId=2024-05-28

var equalSubstring = function (s, t, maxCost) {
    let i = 0,
        j = 0,
        cost = 0,
        maxLen = 0;
    while (j < t.length) {
        const nextCost = Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
        if (cost + nextCost <= maxCost) {
            j++;
            cost += nextCost;
        } else {
            maxLen = Math.max(maxLen, j - i);
            if (i === j) j++;
            else cost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
            i++;
        }
    }
    maxLen = Math.max(maxLen, j - i);
    return maxLen;
};
