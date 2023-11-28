// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/?envType=daily-question&envId=2023-11-28

var numberOfWays = function (corridor) {
    let numberOfSeats = 0;

    let positions = [];
    let pi = 0;
    let seats = [];

    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            numberOfSeats++;
            seats.push(i);
        }

        if (seats.length == 2) {
            positions.push([seats[0], seats[1]]);
            seats = [];
        }
    }

    let res = 1;
    let mod = 1000000007;
    if (numberOfSeats < 2 || numberOfSeats % 2 === 1) {
        return 0;
    }

    for (let i = 1; i < positions.length; i++) {
        res *= positions[i][0] - positions[i - 1][1];
        res = res % mod;
    }

    return res;
};
