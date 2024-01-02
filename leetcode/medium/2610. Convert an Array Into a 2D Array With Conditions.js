// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/?envType=daily-question&envId=2024-01-02

var findMatrix = function (nums) {
    let tempA = [];

    for (const num of nums) {
        let present = false;
        for (const row of tempA) {
            if (!row.includes(num)) {
                row.push(num);
                present = true;
                break;
            }
        }
        if (!present) {
            tempA.push([num]);
        }
    }
    return tempA;
};
