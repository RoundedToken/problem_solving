// https://leetcode.com/problems/create-hello-world-function/

var createHelloWorld = function () {
    return function (...args) {
        return 'Hello World';
    };
};
