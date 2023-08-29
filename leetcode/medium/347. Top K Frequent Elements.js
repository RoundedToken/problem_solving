// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums, k) {
    const map = new Map();

    for (const num of nums) {
        const count = map.get(num);
        if (count === undefined) map.set(num, 1);
        else map.set(num, count + 1);
    }
    console.log(map);
    const answer = [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map((v) => v[0])
        .slice(0, k);
    console.log(answer);
};

function main() {
    console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
}
if (require.main === module) {
    main();
}
