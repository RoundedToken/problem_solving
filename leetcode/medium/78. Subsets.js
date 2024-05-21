// https://leetcode.com/problems/subsets/description/?envType=daily-question&envId=2024-05-21

var subsets = function (nums) {
    const powerset = [];
    generatePowerset([], 0);

    function generatePowerset(path, index) {
        powerset.push(path);
        for (let i = index; i < nums.length; i++) {
            generatePowerset([...path, nums[i]], i + 1);
        }
    }

    return powerset;
};
