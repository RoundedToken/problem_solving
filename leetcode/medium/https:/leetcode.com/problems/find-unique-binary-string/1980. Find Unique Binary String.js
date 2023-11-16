// https://leetcode.com/problems/find-unique-binary-string/?envType=daily-question&envId=2023-11-16

var findDifferentBinaryString = function (nums) {
    return nums.map((s, i) => (s[i] == 1 ? '0' : '1')).join('');
};
