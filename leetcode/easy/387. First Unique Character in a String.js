// https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=daily-question&envId=2024-02-05

var firstUniqChar = function (s) {
    s = s.split('');
    let map = {};
    for (let i of s) {
        if (!map[i]) map[i] = 0;
        map[i] += 1;
    }

    for (let i of Object.keys(map)) {
        if (map[i] === 1) return s.indexOf(i);
    }

    return -1;
};
