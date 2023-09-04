// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

var mostWordsFound = function (sentences) {
    return sentences.reduce((p, c) => {
        const l = c.split(' ').length;
        return l > p ? l : p;
    }, 0);
};
