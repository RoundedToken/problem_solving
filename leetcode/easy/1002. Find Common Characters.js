// https://leetcode.com/problems/find-common-characters/description/?envType=daily-question&envId=2024-06-05

var commonChars = function (words) {
    let res = [];
    for (let wo of words[0]) {
        if (words.every((word) => word.includes(wo))) {
            res.push(wo);
            words = words.map((word) => word.replace(wo, ''));
        }
    }
    return res;
};
