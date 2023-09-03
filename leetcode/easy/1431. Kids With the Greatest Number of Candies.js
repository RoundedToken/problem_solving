// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
    const max = candies.reduce((p, c) => (c > p ? c : p), 0);
    return candies.map((v) => v + extraCandies >= max);
};
