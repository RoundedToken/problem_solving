// https://leetcode.com/problems/count-items-matching-a-rule/description/

var countMatches = function (items, ruleKey, ruleValue) {
    const dic = { type: 0, color: 1, name: 2 };
    ruleKey = dic[ruleKey];
    return items.reduce((prev, curr) => (prev += curr[ruleKey] === ruleValue ? 1 : 0), 0);
};
