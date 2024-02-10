// https://leetcode.com/problems/palindromic-substrings/description/?envType=daily-question&envId=2024-02-10

var countSubstrings = function (s) {
    let output = 0;
    function isPalindrome(low, high) {
        while (low < high) {
            if (s[low] !== s[high]) {
                return false;
            }
            low++;
            high--;
        }
        return true;
    }

    for (let low = 0; low < s.length; low++) {
        for (let high = low; high < s.length; high++) {
            output += isPalindrome(low, high);
        }
    }
    return output;
};
