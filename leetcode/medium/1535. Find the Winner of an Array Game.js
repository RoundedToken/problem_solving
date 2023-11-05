// https://leetcode.com/problems/find-the-winner-of-an-array-game/?envType=daily-question&envId=2023-11-05

var getWinner = function (arr, k) {
    let winner = arr[0];
    let wins = 0;

    for (let i = 1; i < arr.length; i++) {
        if (winner > arr[i]) wins++;
        else {
            wins = 1;
            winner = arr[i];
        }

        if (wins == k) break;
    }

    return winner;
};
