// https://leetcode.com/problems/longest-palindromic-substring/?envType=daily-question&envId=2023-10-27

var longestPalindrome = function (s) {
    if (!s || s.length <= 1) {
        return s;
    }
    let longestPalindrome = s.substring(0, 1);

    for (let i = 0; i < s.length; i++) {
        [expand(s, i, i), expand(s, i, i + 1)].forEach((maybeLongest) => {
            if (maybeLongest.length > longestPalindrome.length) {
                longestPalindrome = maybeLongest;
            }
        });
    }

    return longestPalindrome;
};

function expand(s, begin, end) {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--;
        end++;
    }

    return s.substring(begin + 1, end);
}
