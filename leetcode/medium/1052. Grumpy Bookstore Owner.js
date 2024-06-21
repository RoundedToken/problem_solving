// https://leetcode.com/problems/grumpy-bookstore-owner/description/

var maxSatisfied = function (customers, grumpy, minutes) {
    let start = 0,
        end,
        grumpySum = 0,
        notGrumpySum = 0,
        grumpyMax = 0;

    for (end = 0; end < customers.length; end++) {
        notGrumpySum += grumpy[end] == 0 ? customers[end] : 0;
        grumpySum += grumpy[end] == 1 ? customers[end] : 0;

        if (end - start + 1 > minutes) {
            if (grumpy[start] == 1) {
                grumpySum -= customers[start];
            }
            start += 1;
        }

        grumpyMax = Math.max(grumpyMax, grumpySum);
    }

    return notGrumpySum + grumpyMax;
};
