// https://leetcode.com/problems/promise-time-limit/description/

var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'), t);
            fn(...args)
                .then((v) => resolve(v))
                .catch((v) => reject(v));
        });
    };
};
