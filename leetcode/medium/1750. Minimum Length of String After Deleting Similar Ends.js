// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/?envType=daily-question&envId=2024-03-05

var minimumLength = function (s) {
    let start = 0,
        end = s.length - 1;

    while (start < end) {
        if (s[start] === s[end]) {
            while (s[start] === s[end] && start < end) {
                start++;
            }

            if (start === end) return 0;

            while (s[start - 1] === s[end] && start < end) {
                end--;
            }
        } else {
            return end - start + 1;
        }
    }

    return start === end ? 1 : end - start;
};
