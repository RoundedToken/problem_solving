// https://leetcode.com/problems/number-of-wonderful-substrings/description/?envType=daily-question&envId=2024-04-30

var wonderfulSubstrings = function (word) {
    const cnts = new Array(1024).fill(0);
    cnts[0] = 1;

    let mask = 0;
    let ans = 0;
    for (let i = 0; i < word.length; i++) {
        const k = word[i].charCodeAt(0) - 97;
        mask ^= 1 << k;
        ans += cnts[mask];

        for (let j = 0; j < 10; j++) {
            const code = mask ^ (1 << j);
            ans += cnts[code];
        }

        cnts[mask] += 1;
    }

    return ans;
};
