// https://leetcode.com/problems/implement-stack-using-queues/

var MyStack = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.stack.at(-1);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.stack.length === 0;
};

function main() {
    const stack = new MyStack();
    stack.push(2);
    console.log(stack.top());
}
if (require.main === module) {
    main();
}
