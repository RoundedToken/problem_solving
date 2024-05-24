// https://leetcode.com/problems/maximum-score-words-formed-by-letters/description/?envType=daily-question&envId=2024-05-24

var maxScoreWords = function (words, letters, score) {
    let lettersSize = new Array(26).fill(0);
    for (let char of letters) {
        lettersSize[char.charCodeAt() - 'a'.charCodeAt()]++;
    }

    let maxScore = 0;
    const backTrack = function (start, curSize, curScore) {
        for (let i = start; i < words.length; i++) {
            let word = words[i];
            let remainSize = [...curSize];
            let nextScore = curScore;
            let j = 0;
            while (j < word.length) {
                let idx = word[j].charCodeAt() - 'a'.charCodeAt();
                if (remainSize[idx]-- === 0) break;
                nextScore += score[idx];
                j++;
            }
            if (j === word.length) {
                maxScore = Math.max(maxScore, nextScore);
                backTrack(i + 1, remainSize, nextScore);
            }
        }
    };

    backTrack(0, lettersSize, 0);
    return maxScore;
};
