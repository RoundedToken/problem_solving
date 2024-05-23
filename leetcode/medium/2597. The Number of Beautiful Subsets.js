// https://leetcode.com/problems/the-number-of-beautiful-subsets/submissions/1265459781/?envType=daily-question&envId=2024-05-23

var beautifulSubsets = function (nums, k) {
    const beautifuls = [[]];
    for (const el of nums) {
        beautifuls.push(...beautifuls.filter((s) => !s.includes(el - k) && !s.includes(el + k)).map((s) => [...s, el]));
    }
    return beautifuls.length - 1;
};
