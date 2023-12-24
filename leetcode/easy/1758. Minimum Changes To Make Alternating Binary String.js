// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/?envType=daily-question&envId=2023-12-24

var minOperations = function (s) {
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '0') {
                counter1++;
            }
            if (s[i] === '1') {
                counter2++;
            }
        }
        if (i % 2 === 1) {
            if (s[i] === '1') {
                counter1++;
            }
            if (s[i] === '0') {
                counter2++;
            }
        }
    }
    return Math.min(counter1, counter2);
};
