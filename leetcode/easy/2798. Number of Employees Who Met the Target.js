// https://leetcode.com/problems/number-of-employees-who-met-the-target/

var numberOfEmployeesWhoMetTarget = function (hours, target) {
    return hours.filter((v) => v >= target).length;
};
