// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/?envType=daily-question&envId=2024-03-25

var findDuplicates = function (nums) {
    let hash = {};
    nums.forEach((num) => {
        hash[num] = (hash[num] || 0) + 1;
    });

    let repeatedNumbers = [];
    for (let key in hash) {
        if (hash.hasOwnProperty(key) && hash[key] > 1) {
            repeatedNumbers.push(parseInt(key));
        }
    }

    return repeatedNumbers;
};
