// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
    const map = new Map();

    for (const num of nums) {
        const item = map.get(num);

        if (item === undefined) map.set(num, [0, 1]);
        else map.set(num, [item[1] + item[0], item[1] + 1]);
    }

    return [...map.entries()].reduce((p, c) => p + c[1][0], 0);
};

function main() {
    console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
}
if (require.main === module) {
    main();
}
