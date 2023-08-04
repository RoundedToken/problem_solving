// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    const map = new Map([]);
    for (const ind in nums) map.set(nums[ind], +ind);
    for (const ind in nums) {
        const firstNum = nums[ind];
        const secondNum = target - nums[ind];
        if (map.has(secondNum) && map.get(secondNum) !== +ind) return [+ind, map.get(secondNum)];
    }
};

function main() {
    console.log(twoSum([3, 2, 4], 6));
}
if (require.main === module) {
    main();
}
