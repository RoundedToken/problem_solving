// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/?envType=daily-question&envId=2024-02-14

var rearrangeArray = function (nums) {
    let result = new Array();
    let posPointer = 0;
    let negPointer = 1;

    nums.forEach((element) => {
        if (element > 0) {
            result[posPointer] = element;
            posPointer += 2;
        } else {
            result[negPointer] = element;
            negPointer += 2;
        }
    });

    return result;
};
