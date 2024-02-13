// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/?envType=daily-question&envId=2024-02-13

var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isPalindromic = true;
        for (let j = 0; j < word.length / 2; j++) {
            if (word[j] !== word[word.length - j - 1]) {
                isPalindromic = false;
                break;
            }
        }
        if (isPalindromic) return word;
    }
    return '';
};
