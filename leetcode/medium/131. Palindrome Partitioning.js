// https://leetcode.com/problems/palindrome-partitioning/description/?envType=daily-question&envId=2024-05-22

var partition = function (s) {
    let isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    let result = [];
    let iterate = (str, temp) => {
        if (str.length == 0) {
            result.push(temp);
            return;
        }

        for (let i = 1; i <= str.length; i++) {
            let value = str.slice(0, i);
            if (isPalindrome(value)) {
                iterate(str.slice(i), [...temp, value]);
            }
        }
    };
    iterate(s, []);
    return result;
};
