// https://leetcode.com/problems/bag-of-tokens/description/?envType=daily-question&envId=2024-03-04

var bagOfTokensScore = function (tokens, power) {
    tokens.sort((a, b) => a - b);
    let p1 = 0,
        p2 = tokens.length - 1,
        score = 0;
    while (p1 <= p2) {
        if (tokens[p1] <= power) {
            power -= tokens[p1];
            p1++;
            score++;
        } else if (tokens[p2] + power >= tokens[p1] && p1 !== p2 && score > 0) {
            power += tokens[p2];
            p2--;
            score--;
        } else {
            break;
        }
    }
    return score;
};
