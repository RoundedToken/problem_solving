// https://leetcode.com/problems/word-break-ii/description/?envType=daily-question&envId=2024-05-25

var wordBreak = function (s, wordDict) {
    const ans = helper();

    return ans;

    function helper(currIdx = 0, prevIdx = 0, str = '') {
        if (currIdx >= s.length) {
            if (str.split(' ').join('').length != s.length) {
                return [];
            }

            return [str.trim()];
        }

        let arr1 = [];
        let arr2 = [];

        const subStr = s.slice(prevIdx, currIdx + 1);
        const shouldTake = wordDict.includes(subStr);

        if (shouldTake) {
            arr1 = helper(currIdx + 1, currIdx + 1, str + subStr + ' ');
        }

        arr2 = helper(currIdx + 1, prevIdx, str);

        return [...arr1, ...arr2];
    }
};
