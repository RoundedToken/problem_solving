// https://leetcode.com/problems/linked-list-in-binary-tree/description/

var isSubPath = function (head, root) {
  if (!root) return false;
  if (dfs(head, root)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};

function dfs(head, node) {
  if (!head) return true;
  if (!node) return false;
  if (node.val !== head.val) return false;
  return dfs(head.next, node.left) || dfs(head.next, node.right);
}
