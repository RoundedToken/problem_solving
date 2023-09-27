// https://leetcode.com/problems/decoded-string-at-index/description/?envType=daily-question&envId=2023-09-27

var decodeAtIndex = function (s, k) {
    const lengths = new Map();
    let length = 0;
    let lastChar = '';
    for (let i = 0; length < k; i++) {
        const num = +s[i];
        if (isNaN(num)) {
            length++;
            lastChar = s[i];
            continue;
        }
        if (!lengths.has(i)) lengths.set(i, length);
        const times = Math.min(num - 1, Math.floor((k - length) / lengths.get(i)));
        length += times * lengths.get(i);
        if (times < num - 1) i = -1;
    }
    return lastChar;
};
