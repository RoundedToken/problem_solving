//https://leetcode.com/problems/decode-xored-array/description/

var decode = function (encoded, first) {
    const result = [first];

    for (const n of encoded) {
        result.push(result.at(-1) ^ n);
    }

    return result;
};
