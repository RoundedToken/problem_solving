// https://leetcode.com/problems/decode-the-message/description/

var decodeMessage = function (key, message) {
    let char = 'a';
    const dic = new Map();
    key = key.split('').filter((v) => v !== ' ');
    for (const v of key) {
        if (!dic.has(v)) {
            dic.set(v, char);
            char = String.fromCharCode(char.charCodeAt() + 1);
        }
    }

    return message
        .split('')
        .map((v) => (dic.has(v) ? dic.get(v) : v))
        .join('');
};
