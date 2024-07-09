// https://leetcode.com/problems/average-waiting-time/description/

var averageWaitingTime = function (customers) {
    let waiting = 0,
        idle = 0;
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];
        idle = Math.max(customer[0], idle) + customer[1];
        waiting += idle - customer[0];
    }

    return waiting / customers.length;
};
