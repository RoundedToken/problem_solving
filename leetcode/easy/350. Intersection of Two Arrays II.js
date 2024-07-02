// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

var intersect = function (nums1, nums2) {
    let result = [];
    for (let num of nums1) {
        if (nums2.includes(num)) {
            result.push(num);
            let index = nums2.indexOf(num);
            nums2.splice(index, 1);
        }
    }
    return result;
};
