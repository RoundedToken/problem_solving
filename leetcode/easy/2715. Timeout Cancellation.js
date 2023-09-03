// https://leetcode.com/problems/timeout-cancellation/description/

var cancellable = function (fn, args, t) {
    const id = setTimeout(() => fn(...args), t);
    return function () {
        clearTimeout(id);
    };
};
