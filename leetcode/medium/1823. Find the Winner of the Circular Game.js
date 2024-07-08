// https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/

var findTheWinner = function (n, k) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }

    let index = 0;

    while (arr.length > 1) {
        index = (index + k - 1) % arr.length;
        arr.splice(index, 1);
    }

    return arr[0];
};
