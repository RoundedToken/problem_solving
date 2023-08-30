// https://leetcode.com/problems/minimum-replacements-to-sort-the-array/

var minimumReplacement = function (nums) {
    let prev = nums.at(-1);
    let count = 0;

    for (let i = nums.length - 2; i >= 0; i--) {
        const curr = nums[i];

        if (curr > prev) {
            const parts = Math.ceil(curr / prev);

            count += parts - 1;
            prev = Math.floor(curr / parts);
        } else prev = curr;
    }

    return count;
};

function main() {
    console.log(minimumReplacement([3, 9, 3]));
    console.log(minimumReplacement([12, 9, 7, 6, 17, 19, 21]));
    console.log(minimumReplacement([19, 6]));
}
if (require.main === module) {
    main();
}
