// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/?envType=daily-question&envId=2024-05-29

var numSteps = function (s) {
    let result = (carry = 0);

    for (let index = s.length - 1; index > 0; index--) {
        const str = s[index];

        if (str === '0') {
            result += carry ? 2 : 1;
            continue;
        }
        result += carry ? 1 : 2;
        carry = 1;
    }
    return result + carry;
};
