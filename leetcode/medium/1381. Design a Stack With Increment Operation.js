// https://leetcode.com/problems/design-a-stack-with-increment-operation/description/

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = [];
  this.inc = new Array(maxSize).fill(0);
  this.size = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.size) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length) {
    const idx = this.stack.length - 1;
    const inc = this.inc[idx];
    if (idx - 1 >= 0) this.inc[idx - 1] += inc;
    this.inc[idx] = 0;
    return this.stack.pop() + inc;
  } else {
    return -1;
  }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  const idx = Math.min(k, this.stack.length) - 1;
  this.inc[idx] += val;
};
