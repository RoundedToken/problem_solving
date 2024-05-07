// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/?envType=daily-question&envId=2024-05-07

var doubleIt = function (head) {
    let temp = head;
    let temp_arr = [];
    while (temp != null) {
        temp_arr.push(temp.val);
        temp = temp.next;
    }
    temp_arr = BigInt(temp_arr.join(''));
    temp_arr *= BigInt(2);
    temp_arr = temp_arr.toString();
    temp_arr = temp_arr.split('');
    for (let i = 0; i < temp_arr.length; i++) {
        temp_arr[i] = parseInt(temp_arr[i]);
    }
    const head1 = new ListNode(temp_arr[0]);
    let prev = head1;
    for (let i = 1; i < temp_arr.length; i++) {
        const newNode = new ListNode(temp_arr[i]);
        prev.next = newNode;
        prev = prev.next;
    }
    return head1;
};
