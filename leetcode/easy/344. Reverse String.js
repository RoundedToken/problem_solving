// https://leetcode.com/problems/reverse-string/description/?envType=daily-question&envId=2024-06-02

var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1;
    let temp;

    while (i <= j) {
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++, j--;
    }
};
