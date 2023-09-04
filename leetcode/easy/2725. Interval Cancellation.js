// https://leetcode.com/problems/interval-cancellation/description/

var cancellable = function (fn, args, t) {
    fn(...args);
    const id = setInterval(() => {
        fn(...args);
    }, t);
    return () => {
        clearInterval(id);
    };
};
