// https://leetcode.com/problems/my-calendar-i/description/

var MyCalendar = function () {
  this.root = null;
};

var Node = function (s, e) {
  this.value = [s, e];
  this.left = null;
  this.right = null;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

MyCalendar.prototype.book = function (start, end) {
  let { root } = this;
  let openTimeSlot = true;
  if (!root) {
    this.root = new Node(start, end);
    return openTimeSlot;
  }
  let currNode = root;
  const newNode = new Node(start, end);
  while (currNode) {
    if (currNode.value[0] < end && start < currNode.value[1]) {
      openTimeSlot = false;
      break;
    } else {
      if (start < currNode.value[0]) {
        if (!currNode.left) {
          currNode.left = newNode;
          break;
        } else {
          currNode = currNode.left;
        }
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          break;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }

  return openTimeSlot;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
