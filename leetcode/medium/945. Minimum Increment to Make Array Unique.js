// https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/?envType=daily-question&envId=2024-06-14

var minIncrementForUnique = function (nums) {
    nums.sort((a, b) => a - b);
    let elementCount = {},
        result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (elementCount[nums[i]] != undefined) {
            let j = nums[i];
            while (elementCount[j] != undefined) {
                result++;
                j++;
            }
            elementCount[j] = 1;
        } else {
            elementCount[nums[i]] = 1;
        }
    }

    return result;
};
