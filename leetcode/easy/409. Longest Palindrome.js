// https://leetcode.com/problems/longest-palindrome/description/?envType=daily-question&envId=2024-06-04

var longestPalindrome = function (s) {
    if (s.length === 1) return 1;

    let sArray = s.split('').sort().join('');
    let count = 0;
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === sArray[i + 1]) {
            count += 2;
            i++;
        }
    }
    if (count < s.length) {
        return count + 1;
    }

    return count;
};
