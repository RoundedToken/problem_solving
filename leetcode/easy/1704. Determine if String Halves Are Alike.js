// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/?envType=daily-question&envId=2024-01-12

var halvesAreAlike = function (s) {
    const target = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let a = 0,
        b = 0;
    for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
        target.has(s[left]) && ++a;
        target.has(s[right]) && ++b;
    }
    return a === b;
};
