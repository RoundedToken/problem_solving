// https://leetcode.com/problems/majority-element-ii/?envType=daily-question&envId=2023-10-05

var majorityElement = function (nums) {
    const map = new Map();

    for (const num of nums) {
        const count = map.get(num);

        if (count === undefined) map.set(num, 1);
        else map.set(num, count + 1);
    }

    return [...map.entries()].filter((v) => v[1] > nums.length / 3).map((v) => v[0]);
};
