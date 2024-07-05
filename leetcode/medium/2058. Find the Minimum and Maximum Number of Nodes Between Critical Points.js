// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/?envType=daily-question&envId=2024-07-05

var nodesBetweenCriticalPoints = function (head) {
    let firstPoint = -1,
        lastPoint = -1;
    let index = 0,
        minD = Infinity,
        maxD = -Infinity;
    let cur = head.next,
        prev = head,
        next = head?.next?.next;

    while (next) {
        if (isCriticalPoint(prev.val, cur.val, next.val)) {
            if (firstPoint == -1) {
                firstPoint = index;
            } else {
                maxD = Math.max(maxD, index - firstPoint);
            }
            if (lastPoint !== -1) {
                minD = Math.min(minD, index - lastPoint);
            }
            lastPoint = index;
        }
        index++;
        prev = cur;
        cur = next;
        next = next.next;
    }
    return firstPoint !== lastPoint ? [minD, maxD] : [-1, -1];
};

function isCriticalPoint(prev, cur, next) {
    return (prev > cur && next > cur) || (prev < cur && next < cur);
}
