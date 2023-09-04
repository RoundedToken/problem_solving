// https://leetcode.com/problems/goal-parser-interpretation/

var interpret = function (command) {
    const dic = new Map([
        ['G', 'G'],
        ['()', 'o'],
        ['(al)', 'al'],
    ]);
    let str = '';
    let result = '';
    for (const char of command) {
        str += char;
        if (dic.has(str)) {
            result += dic.get(str);
            str = '';
        }
    }
    return result;
};
