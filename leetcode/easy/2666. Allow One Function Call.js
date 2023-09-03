// https://leetcode.com/problems/allow-one-function-call/description/

var once = function (fn) {
    let isCalled = false;

    return function (...args) {
        if (!isCalled) {
            isCalled = true;
            return fn(...args);
        }
    };
};
