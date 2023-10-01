// https://leetcode.com/problems/reverse-words-in-a-string-iii/?envType=daily-question&envId=2023-10-01

var reverseWords = function (s) {
    return s
        .split(' ')
        .map((v) => v.split('').reverse().join(''))
        .join(' ');
};
