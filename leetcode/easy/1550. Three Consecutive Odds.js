// https://leetcode.com/problems/three-consecutive-odds/description/

var threeConsecutiveOdds = function (arr) {
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            oddCount++;
            if (oddCount === 3) {
                break;
            }
        } else {
            oddCount = 0;
        }
    }

    return oddCount === 3 ? true : false;
};
