// https://leetcode.com/problems/add-two-promises/

var addTwoPromises = async function (promise1, promise2) {
    return promise1.then((num1) => promise2.then((num2) => num2 + num1));
};
