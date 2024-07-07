// https://leetcode.com/problems/water-bottles/description/

var numWaterBottles = function (numBottles, numExchange) {
    let drinked = numBottles;
    let fullBottles = 0;
    let empties = numBottles;
    while (empties >= numExchange) {
        fullBottles = Math.floor(empties / numExchange);
        drinked += fullBottles;
        empties = fullBottles + (empties % numExchange);
    }
    return drinked;
};
