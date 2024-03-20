// https://leetcode.com/problems/merge-in-between-linked-lists/description/?envType=daily-question&envId=2024-03-20

var mergeInBetween = function (list1, a, b, list2) {
    let temp = list1,
        aNode = null,
        bNode = null,
        index = 0;
    while (temp !== null) {
        if (index === a - 1) {
            aNode = temp;
        } else if (index === b + 1) {
            bNode = temp;
        }
        temp = temp.next;
        index++;
    }
    aNode.next = list2;
    while (list2.next !== null) {
        list2 = list2.next;
    }
    list2.next = bNode;
    return list1;
};
