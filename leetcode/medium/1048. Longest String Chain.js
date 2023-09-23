// https://leetcode.com/problems/longest-string-chain/?envType=daily-question&envId=2023-09-23

var longestStrChain = function (words) {
    var memory = {};
    words.sort((a, b) => a.length - b.length);
    for (var word of words) {
        var longest = 0;
        for (var i = 0; i < word.length; i++) {
            var pre = word.slice(0, i) + word.slice(i + 1);
            longest = Math.max(longest, (memory[pre] || 0) + 1);
        }
        memory[word] = longest;
    }
    return Math.max(...Object.values(memory));
};
