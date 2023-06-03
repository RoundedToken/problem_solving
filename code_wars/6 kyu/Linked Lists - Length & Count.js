// https://www.codewars.com/kata/55beec7dd347078289000021/solutions/javascript

function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let l = 0;
    let h = head;
    if (head === null) return 0;
    while (true) {
        l++;
        if (h.next === null) break;
        h = h.next;
    }
    return l;
}

function count(head, data) {
    let count = 0;
    let h = head;
    if (head === null) return 0;
    while (true) {
        if (h.data && h.data === data) count++;
        if (h.next === null) break;
        h = h.next;
    }
    return count;
}
