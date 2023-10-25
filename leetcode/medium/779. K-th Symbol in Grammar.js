// https://leetcode.com/problems/k-th-symbol-in-grammar/?envType=daily-question&envId=2023-10-25

var kthGrammar = function (row, col) {
    if (row == 1) return 0;

    var last = kthGrammar(row - 1, Math.ceil(col / 2));

    if (last == 0) {
        if (col % 2 == 0) last = 1;
    } else {
        if (col % 2 == 0) last = 0;
    }
    return last;
};
