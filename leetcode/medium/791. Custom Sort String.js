// https://leetcode.com/problems/custom-sort-string/description/?envType=daily-question&envId=2024-03-11

var customSortString = function (order, s) {
    let s2 = '',
        x;

    for (let i in order) {
        for (let j in s) {
            if (order[i] == s[j]) {
                s2 += s[j];
            }
        }
    }

    for (x = 0; x < s.length; x++) {
        if (order.includes(s[x]) == false) {
            s2 += s[x];
        }
    }
    return s2;
};
