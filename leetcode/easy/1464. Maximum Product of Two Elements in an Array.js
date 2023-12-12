// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/?envType=daily-question&envId=2023-12-12

var maxProduct = function (nums) {
    let m1 = 0,
        m2 = 0;
    for (const val of nums) {
        m2 = Math.max(m2, Math.min(m1, val));
        m1 = Math.max(m1, val);
    }
    return (m1 - 1) * (m2 - 1);
};
