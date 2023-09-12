// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/description/?envType=daily-question&envId=2023-09-12

var minDeletions = function (s) {
    const map = new Map();

    for (const char of s) {
        const count = map.get(char);

        if (count === undefined) map.set(char, 1);
        else map.set(char, count + 1);
    }

    const counts = [...map.values()].sort((a, b) => b - a);
    let prev = counts[0];
    let ans = 0;

    for (let i = 1; i < counts.length; i++) {
        const count = counts[i];

        if (prev <= count) {
            ans += count - prev + 1;
            prev = prev === 1 ? prev : prev - 1;
        } else prev = count;

        if (count === 0) break;
    }

    return ans;
};
