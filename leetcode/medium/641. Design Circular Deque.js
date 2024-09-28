// https://leetcode.com/problems/design-circular-deque/description/

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.dq = [];
  this.n = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.dq.length < this.n) {
    this.dq.unshift(value);
    return true;
  }
  return false;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.dq.length < this.n) {
    this.dq.push(value);
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.dq.length > 0) {
    this.dq.shift();
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.dq.length > 0) {
    this.dq.pop();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.dq.length > 0 ? this.dq[0] : -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.dq.length > 0 ? this.dq[this.dq.length - 1] : -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.dq.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.dq.length === this.n;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
