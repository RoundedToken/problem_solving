// https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/description/

const inRange = (idx, start, end) => {
    return idx >= start && idx <= end;
};
var minKBitFlips = function (nums, k) {
    let moves = 0,
        flipStart = Number.MAX_SAFE_INTEGER,
        flipEnd = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length - k + 1; i++) {
        if (i > flipEnd) {
            [flipEnd, flipStart] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        }
        if ((nums[i] === 0 && i < flipStart) || (nums[i] === 1 && i >= flipStart)) {
            moves++;
            if (i < flipStart) {
                flipStart = i;
                flipEnd = i + k - 1;
            } else {
                flipStart = flipEnd + 1;
                flipEnd = i + k - 1;
                while (flipStart <= flipEnd) {
                    nums[flipStart] = nums[flipStart] === 0 ? 1 : 0;
                    flipStart++;
                }
                [flipEnd, flipStart] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
            }
        }
    }
    for (let j = 0; j < k - 1; j++) {
        const num = nums.at(-1 - j);
        if ((inRange(nums.length - j - 1, flipStart, flipEnd) && num === 1) || (!inRange(nums.length - j - 1, flipStart, flipEnd) && num === 0)) return -1;
    }
    return moves;
};
