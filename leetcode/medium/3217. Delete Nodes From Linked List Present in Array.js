// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/description/

var modifiedList = function (nums, head) {
  let deletes = new Set(nums);
  let dummy = new ListNode();
  dummy.next = head;

  const dfs = (dummy) => {
    if (!dummy.next) return;

    if (deletes.has(dummy.next.val)) {
      dummy.next = dummy.next.next;
    } else {
      dummy = dummy.next;
    }
    dfs(dummy);
  };

  dfs(dummy);

  return dummy.next;
};
