// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/?envType=daily-question&envId=2024-06-13

var minMovesToSeat = function (seats, students) {
    let sum = 0;
    seats = seats.sort((a, b) => a - b);
    students = students.sort((a, b) => a - b);
    for (let i = 0; i < seats.length; i++) sum += Math.abs(seats[i] - students[i]);
    return sum;
};
