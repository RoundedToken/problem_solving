// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
    let hash = new Map();
    let sorted = nums.slice().sort((a, b) => a - b);
    sorted.forEach((number, idx) => (hash.has(number) ? null : hash.set(number, idx)));
    return nums.map((x) => hash.get(x));
};
