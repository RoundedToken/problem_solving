// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/

var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const result = Array(functions.length);
        let count = 0;

        functions.forEach((func, i) => {
            func()
                .then((v) => {
                    count++;
                    result[i] = v;
                    if (count === functions.length) resolve(result);
                })
                .catch((er) => reject(er));
        });
    });
};
