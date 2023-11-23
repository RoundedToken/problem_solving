// https://leetcode.com/problems/arithmetic-subarrays/?envType=daily-question&envId=2023-11-23

var checkArithmeticSubarrays = function (nums, l, r) {
    const chechArithmetic = (ar) => {
        const diff = ar[1] - ar[0];
        for (let i = 2; i < ar.length; i++) if (ar[i] - ar[i - 1] != diff) return false;
        return true;
    };

    return l.map((_, i) => chechArithmetic(nums.slice(l[i], r[i] + 1).sort((a, b) => a - b)));
};
