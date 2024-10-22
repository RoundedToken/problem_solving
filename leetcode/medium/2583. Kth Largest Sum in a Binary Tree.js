// https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/description/

var kthLargestLevelSum = function (root, k) {
  if (!root) return 0;
  let arr = [],
    queue = [root];
  while (queue.length) {
    let n = queue.length,
      sum = 0;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    arr.push(sum);
  }
  return arr.sort((a, b) => b - a)[k - 1] || -1;
};
