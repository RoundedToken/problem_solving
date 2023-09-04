// https://leetcode.com/problems/strictly-palindromic-number/

const isPalindrome = (str) => {
    const l = str.length;
    const mid = Math.floor(l / 2);
    const isOdd = l % 2;
    const right = str.slice(0, mid);
    const left = str.slice(0, isOdd ? mid + 1 : mid);
    return right === left.split('').reverse().join('');
};

var isStrictlyPalindromic = function (n) {
    let base = n - 2;
    if (base > 36) return false;
    while (base >= 2) {
        if (!isPalindrome(n.toString(base))) return false;
        base--;
    }
    return true;
};
