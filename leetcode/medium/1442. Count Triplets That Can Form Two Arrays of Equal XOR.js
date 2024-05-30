// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/?envType=daily-question&envId=2024-05-30

var countTriplets = function (arr) {
    let ans = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let xor = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            xor ^= arr[k];
            if (xor == 0) {
                ans += k - i;
            }
        }
    }
    return ans;
};
