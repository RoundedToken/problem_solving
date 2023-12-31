// https://leetcode.com/problems/largest-substring-between-two-equal-characters/?envType=daily-question&envId=2023-12-31

var maxLengthBetweenEqualCharacters = function (s) {
    let out = -1;
    for (let i = s.length - 1; i > 0; i--) {
        let holder = s.indexOf(s[i]);
        out = Math.max(out, i - (holder + 1));
    }

    return out;
};
