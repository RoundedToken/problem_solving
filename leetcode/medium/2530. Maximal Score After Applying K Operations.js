// https://leetcode.com/problems/maximal-score-after-applying-k-operations/description/

const maxKelements = function (nums, k) {
  const q = new MaxPriorityQueue();
  let sum = 0;
  for (let i of nums) {
    q.enqueue(i);
  }
  for (let i = 0; i < k; i++) {
    let val = q.dequeue().element;
    sum += val;
    q.enqueue(Math.ceil(val / 3));
  }
  return sum;
};
