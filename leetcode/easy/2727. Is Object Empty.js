// https://leetcode.com/problems/is-object-empty/

var isEmpty = function (obj) {
    const str = JSON.stringify(obj);
    return str === '{}' || str === '[]';
};
