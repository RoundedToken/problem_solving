// https://leetcode.com/problems/length-of-last-word/description/?envType=daily-question&envId=2024-04-01

var lengthOfLastWord = function (s) {
    remove_white_space = s.trim();
    arr = remove_white_space.split(' ');
    len = arr.length - 1;
    return arr[len].length;
};
